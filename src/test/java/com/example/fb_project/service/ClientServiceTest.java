package com.example.fb_project.service;

import com.example.fb_project.dto.ClientRegisterDto;
import com.example.fb_project.entity.Clients;
import com.example.fb_project.entity.CreateClientDto;
import com.example.fb_project.mapper.ClientMapperDto;
import com.example.fb_project.repository.ClientRepository;
import com.example.fb_project.security.CheckEmail;
import org.hibernate.query.IllegalQueryOperationException;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;

class ClientServiceTest {

    ClientRepository clientRepository = Mockito.mock(ClientRepository.class);

    ClientMapperDto clientMapperDto = Mockito.mock(ClientMapperDto.class);

    CheckEmail checkEmail = new CheckEmail();

    BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();

    ClientService clientService = new ClientService(clientRepository,
            checkEmail, clientMapperDto,
            bCryptPasswordEncoder);

    @Test
    void registerClient() {
        ClientRegisterDto clientRegisterDto = CreateClientDto.clientRegisterDto();
        Clients registerClient = new Clients(
                clientRegisterDto.getFirstName(),
                clientRegisterDto.getLastName(),
                clientRegisterDto.getPhoneNumber(),
                clientRegisterDto.getEmail(),
                bCryptPasswordEncoder.encode(clientRegisterDto.getPassword()),
                clientRegisterDto.getBirthDate());
        clientService.registerClient(clientRegisterDto);

        Mockito.verify(clientRepository, Mockito.times(1)).findByEmail(registerClient.getEmail());
        Mockito.verify(clientRepository, Mockito.times(1)).findByPhoneNumber(registerClient.getPhoneNumber());
        Mockito.verify(clientRepository, Mockito.times(1)).save(registerClient);
    }

    @Test
    void registrationClientExistByEmailException() {
        Clients clients = new Clients();
        ClientRegisterDto clientRegisterDto = CreateClientDto.clientRegisterDto();
        Mockito.when(clientRepository.findByEmail(clientRegisterDto.getEmail())).thenReturn(Optional.of(clients));
        IllegalQueryOperationException illegalQueryOperationException = assertThrows(
                IllegalQueryOperationException.class,
                () -> clientService.registerClient(clientRegisterDto)
        );
        assertEquals("The Client has already been added", illegalQueryOperationException.getMessage());
    }

    @Test
    void registrationClientExistByPhoneNumberException() {
        Clients clients = new Clients();
        ClientRegisterDto clientRegisterDto = CreateClientDto.clientRegisterDto();
        Mockito.when(clientRepository.findByPhoneNumber(clientRegisterDto.getPhoneNumber())).thenReturn(Optional.of(clients));
        IllegalQueryOperationException illegalQueryOperationException = assertThrows(
                IllegalQueryOperationException.class,
                () -> clientService.registerClient(clientRegisterDto)
        );
        assertEquals("The Client has already been added", illegalQueryOperationException.getMessage());
    }

    @Test
    void emailEmptyException() {
        ClientRegisterDto clientRegisterDto = CreateClientDto.clientRegisterDto();
        clientRegisterDto.setEmail("");

        IllegalArgumentException illegalArgumentException = assertThrows(
                IllegalArgumentException.class,
                () -> clientService.registerClient(clientRegisterDto)
        );
        assertEquals("The data is missing", illegalArgumentException.getMessage());
        Mockito.verify(clientRepository, Mockito.times(0)).save(Mockito.any());
    }
    @Test
    void nameEmptyException() {
        ClientRegisterDto clientRegisterDto = CreateClientDto.clientRegisterDto();
        clientRegisterDto.setFirstName("");

        IllegalArgumentException illegalArgumentException = assertThrows(
                IllegalArgumentException.class,
                () -> clientService.registerClient(clientRegisterDto)
        );
        assertEquals("The data is missing", illegalArgumentException.getMessage());
        Mockito.verify(clientRepository, Mockito.times(0)).save(Mockito.any());
    }
    @Test
    void lastNameEmptyException() {
        ClientRegisterDto clientRegisterDto = CreateClientDto.clientRegisterDto();
        clientRegisterDto.setLastName("");

        IllegalArgumentException illegalArgumentException = assertThrows(
                IllegalArgumentException.class,
                () -> clientService.registerClient(clientRegisterDto)
        );
        assertEquals("The data is missing", illegalArgumentException.getMessage());
        Mockito.verify(clientRepository, Mockito.times(0)).save(Mockito.any());
    }
    @Test
    void phoneEmptyException() {
        ClientRegisterDto clientRegisterDto = CreateClientDto.clientRegisterDto();
        clientRegisterDto.setPhoneNumber("");

        IllegalArgumentException illegalArgumentException = assertThrows(
                IllegalArgumentException.class,
                () -> clientService.registerClient(clientRegisterDto)
        );
        assertEquals("The data is missing", illegalArgumentException.getMessage());
        Mockito.verify(clientRepository, Mockito.times(0)).save(Mockito.any());
    }

    @Test
    void passwordEmptyException() {
        ClientRegisterDto clientRegisterDto = CreateClientDto.clientRegisterDto();
        clientRegisterDto.setPassword("");

        IllegalArgumentException illegalArgumentException = assertThrows(
                IllegalArgumentException.class,
                () -> clientService.registerClient(clientRegisterDto)
        );
        assertEquals("The data is missing", illegalArgumentException.getMessage());
        Mockito.verify(clientRepository, Mockito.times(0)).save(Mockito.any());
    }

    @Test
    void emailIsNotValidException() {
        ClientRegisterDto clientRegisterDto = CreateClientDto.clientRegisterDto();
        clientRegisterDto.setEmail("@gmail.com");

        IllegalArgumentException illegalArgumentException = assertThrows(
                IllegalArgumentException.class,
                () -> clientService.registerClient(clientRegisterDto)
        );
        assertEquals("Email is not valid", illegalArgumentException.getMessage());
        Mockito.verify(clientRepository, Mockito.times(0)).save(Mockito.any());
    }


}