package com.example.fb_project.service;

import com.example.fb_project.dto.ClientDto;
import com.example.fb_project.dto.ClientRegisterDto;
import com.example.fb_project.dto.ClientUpdateDto;
import com.example.fb_project.entity.Clients;
import com.example.fb_project.entity.Product;
import com.example.fb_project.mapper.ClientMapperDto;
import com.example.fb_project.mapper.ProductMapper;
import com.example.fb_project.repository.ClientRepository;
import com.example.fb_project.repository.ProductRepository;
import com.example.fb_project.security.CheckEmail;
import lombok.RequiredArgsConstructor;
import org.bson.types.ObjectId;
import org.hibernate.query.IllegalQueryOperationException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ClientService {
    private final ClientRepository clientRepository;
    private final CheckEmail checkEmail;
    private final ClientMapperDto clientMapperDto;
    private final ProductMapper productMapper;
    private final ProductRepository productRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    /**
     * Registers a new client based on the provided client registration data.
     *
     * @param client The client registration data (ClientRegisterDto) containing the necessary information.
     * @return The registered client details (ClientDto) after successful registration.
     * @throws IllegalQueryOperationException if the client with the same email or phone number already exists.
     */
    public ClientDto registerClient(ClientRegisterDto client) {
        checkData(client);
        checkEmail(client);

        boolean checkClientEmail = clientRepository.findByEmail(client.getEmail()).isEmpty();
        if (!checkClientEmail)
            throw new IllegalQueryOperationException("The Client with this email already exists");

        Clients registerClient = new Clients(
                client.getFirstName(),
                client.getLastName(),
                client.getPhoneNumber(),
                client.getEmail(),
                bCryptPasswordEncoder.encode(client.getPassword()),
                client.getBirthDate(),
                client.getAddress());
        clientRepository.save(registerClient);
        return clientMapperDto.toDto(registerClient);
    }


    /**
     * Checks if the provided email address is valid.
     *
     * @param client The {@link ClientRegisterDto} object containing the email address to be checked.
     * @throws IllegalArgumentException if the email address is not valid.
     */
    private void checkEmail(ClientRegisterDto client) {
        if (!checkEmail.testEmail(client.getEmail())) throw new IllegalArgumentException("Email is not valid");
    }

    /**
     * This method checks the data provided in the ClientRegisterDto object.
     * It verifies if the required fields (first name, last name, email, password, and phone number)
     * are not null or empty.
     * <p>If any of the required fields are missing or empty,
     * it throws an IllegalArgumentException with an appropriate error message.
     *
     * @param client The ClientRegisterDto object containing the client's registration data.
     * @throws IllegalArgumentException if any of the required fields are missing or empty.
     */
    private static void checkData(ClientRegisterDto client) {
        if (client.getFirstName() == null || client.getFirstName().isBlank() ||
                client.getLastName() == null || client.getLastName().isBlank() ||
                client.getEmail() == null || client.getEmail().isBlank() ||
                client.getPassword() == null || client.getPassword().isBlank() ||
                client.getPhoneNumber() == null || client.getPhoneNumber().isBlank())
            throw new IllegalArgumentException("The data is missing");
    }

    public Page<ClientDto> getClientsByPage(Pageable pageable) {
        Page<Clients> clients = clientRepository.findAll(pageable);
        if (clients.isEmpty())
            throw new IllegalQueryOperationException("Clients don't exist in the Data Base");
        return clients.map(clientMapperDto::toDto);
    }

    public ClientDto getClient(String password, String email) {
        Clients client = clientRepository.findByEmail(email)
                .orElseThrow(() -> new IllegalArgumentException("Client not found"));

        if (bCryptPasswordEncoder.matches(password, client.getPassword())) {
            ClientDto clientDto = clientMapperDto.toDto(client);
            clientDto.setPurchases(productMapper.toDtoList(client.getPurchases()));
            return clientDto;
        } else {
            throw new IllegalArgumentException("Invalid credentials");
        }
    }

    public ClientDto updateClient(ClientUpdateDto clientUpdateDto) {
        Clients client = clientRepository.
                findById(new ObjectId(clientUpdateDto.getId())).
                orElseThrow(() -> new IllegalArgumentException("Client not found"));

        client.setPassword(bCryptPasswordEncoder.encode(clientUpdateDto.getPassword()));
        client.setPhoneNumber(clientUpdateDto.getPhone());
        client.setAddress(clientUpdateDto.getAddress());

        clientRepository.save(client);
        return clientMapperDto.toDto(client);
    }

    public ClientDto addPurchase(String productId, String clientId) {
        Product product = productRepository.
                findById(new ObjectId(productId)).
                orElseThrow(() -> new IllegalArgumentException("The Product not found"));

        Clients client = clientRepository.
                findById(new ObjectId(clientId)).
                orElseThrow(() -> new IllegalArgumentException("The Client not found"));

        client.getPurchases().add(product);

        clientRepository.save(client);

        return clientMapperDto.toDto(client);
    }
}
