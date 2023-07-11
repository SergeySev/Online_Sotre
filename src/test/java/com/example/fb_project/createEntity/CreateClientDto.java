package com.example.fb_project.createEntity;

import com.example.fb_project.dto.ClientDto;
import com.example.fb_project.dto.ClientRegisterDto;

import java.time.LocalDateTime;

public class CreateClientDto {
    public static ClientDto createClientDto() {
        return new ClientDto("John",
                "Doe",
                "+49123123123",
                "email@gmail.com",
                LocalDateTime.of(1996, 12, 12, 0 ,0 ,0 ,0));
    }

    public static ClientRegisterDto clientRegisterDto() {
        return new ClientRegisterDto("John",
                "Doe",
                "+49123123123",
                "email@gmail.com",
                "123123",
                LocalDateTime.of(1996, 12, 12, 0 ,0 ,0 ,0));
    }

}
