package com.example.fb_project.service;

import com.example.fb_project.dto.*;
import com.example.fb_project.entity.Client;
import com.example.fb_project.entity.Order;
import com.example.fb_project.entity.Product;
import com.example.fb_project.mapper.ClientMapperDto;
import com.example.fb_project.mapper.OrderMapper;
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

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class ClientService {
    private final ClientRepository clientRepository;
    private final CheckEmail checkEmail;
    private final ClientMapperDto clientMapperDto;
    private final OrderMapper orderMapper;
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

        Client registerClient = new Client(
                client.getFirstName(),
                client.getLastName(),
                client.getPhoneNumber(),
                client.getEmail(),
                bCryptPasswordEncoder.encode(client.getPassword()),
                client.getBirthDate(),
                client.getAddress());

        System.out.println("PASSWORD AFTER REGISTRY: " + registerClient.getPassword());
        registerClient.setToken(UUID.randomUUID().toString());
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
        Page<Client> clients = clientRepository.findAll(pageable);
        if (clients.isEmpty())
            throw new IllegalQueryOperationException("Clients don't exist in the Data Base");
        return clients.map(clientMapperDto::toDto);
    }

    public ClientDto authorisation(ClientAuthorisationDto clientAuthorisationDto) {
        Client client = clientRepository.findByEmail(clientAuthorisationDto.getEmail())
                .orElseThrow(() -> new IllegalArgumentException("Client not found"));

        System.out.println("PASSWORD WITH LOGIN REGISTRY client: " + client.getPassword());
        System.out.println("PASSWORD WITH LOGIN REGISTRY request: " + clientAuthorisationDto.getPassword());
        System.out.println("PASSWORD WITH LOGIN REGISTRY request: " + bCryptPasswordEncoder.encode(clientAuthorisationDto.getPassword()));
        if (bCryptPasswordEncoder.matches(clientAuthorisationDto.getPassword(), client.getPassword())) {
            client.setToken(UUID.randomUUID().toString());
            clientRepository.save(client);


            return setClientsPurchases(client);
        } else {
            throw new IllegalArgumentException("Invalid credentials");
        }
    }

    private ClientDto setClientsPurchases(Client client) {
        ClientDto clientDto = clientMapperDto.toDto(client);
        List<OrderDto> orderDtos = new ArrayList<>();
        for (Order order : client.getOrders()) {
            OrderDto orderDto = orderMapper.toDto(order);
            orderDto.setProducts(productMapper.toDtoList(order.getProducts()));
            orderDtos.add(orderDto);
        }
        clientDto.setOrders(orderDtos);
        return clientDto;
    }

    public ClientDto logOut(String clientId) {
        Client client = clientRepository.findById(new ObjectId(clientId))
                .orElseThrow(() -> new IllegalArgumentException("Client not found"));

        client.setToken("");
        clientRepository.save(client);
        return setClientsPurchases(client);
    }

    public ClientDto checkToken(String token) {
        Client client = clientRepository.
                findByToken(token).
                orElseThrow(() -> new IllegalArgumentException("Client not found"));

        return setClientsPurchases(client);
    }

    public ClientDto updateClient(ClientUpdateDto clientUpdateDto) {
        Client client = clientRepository.
                findById(new ObjectId(clientUpdateDto.getId())).
                orElseThrow(() -> new IllegalArgumentException("Client not found"));

        if (!clientUpdateDto.getFirstName().isEmpty()) {
            client.setFirstName(clientUpdateDto.getFirstName());
        }

        if (!clientUpdateDto.getLastName().isEmpty()) {
            client.setLastName(clientUpdateDto.getLastName());
        }

        if (!clientUpdateDto.getPhoneNumber().isEmpty()) {
            client.setPhoneNumber(clientUpdateDto.getPhoneNumber());
        }

        if (clientUpdateDto.getBirthDate() != null) {
            client.setBirthDate(clientUpdateDto.getBirthDate());
        }
        if (clientUpdateDto.getAddress() != null) {
            client.setAddress(clientUpdateDto.getAddress());
        }

        clientRepository.save(client);
        return clientMapperDto.toDto(client);
    }

    public ClientDto updateClientsPassword(ClientUpdateDto clientUpdateDto) {
        Client client = clientRepository.
                findById(new ObjectId(clientUpdateDto.getId())).
                orElseThrow(() -> new IllegalArgumentException("Client not found"));

        client.setPassword(bCryptPasswordEncoder.encode(clientUpdateDto.getPassword()));

        System.out.println("PASSWORD AFTER UPDATE: " + client.getPassword());


        clientRepository.save(client);
        return clientMapperDto.toDto(client);
    }

    public ClientDto addPurchase(Order order, String clientId) {
        Client client = clientRepository.
                findById(new ObjectId(clientId)).
                orElseThrow(() -> new IllegalArgumentException("The Client not found"));

        List<Product> productsFromOrder = new ArrayList<>();
        for (String productId : order.getProductsId()) {
            Product product = productRepository.
                    findById(new ObjectId(productId)).
                    orElseThrow(() -> new IllegalArgumentException("The Product not found"));
            productsFromOrder.add(product);
        }

        order.setProducts(productsFromOrder);

        client.getOrders().add(order);

        clientRepository.save(client);

        return clientMapperDto.toDto(client);
    }
}
