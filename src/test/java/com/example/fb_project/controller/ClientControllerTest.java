package com.example.fb_project.controller;

import com.example.fb_project.createEntity.CreateClientDto;
import com.example.fb_project.dto.ClientDto;
import com.example.fb_project.service.ClientService;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.csrf;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;


@WebMvcTest
@WithMockUser
class ClientControllerTest {
    @MockBean
    ClientService clientService;

    @Autowired
    MockMvc mockMvc;

    String json = """
                {
                    "firstName": "THird",
                    "lastName": "Thidf",
                    "phoneNumber": "+4913234032344",
                    "email": "client@gmail.com",
                    "password": "123123",
                    "birthDate": "1996-02-16T00:00:00.000Z"
                }""";

//    @Test
//    void registrationNewClient() throws Exception {
//        ClientDto expected = CreateClientDto.createClientDto();
//
//
//        Mockito.when(clientService.registerClient(Mockito.any())).thenReturn(expected);
//
//        mockMvc.perform(MockMvcRequestBuilders.post("/api/v1/client/registration").with(csrf())
//                .contentType(MediaType.APPLICATION_JSON)
//                .content(json))
//                .andExpect(status().isOk())
//                .andExpect(jsonPath("$.firstName").value(expected.getFirstName()))
//                .andExpect(jsonPath("$.lastName").value(expected.getLastName()))
//                .andExpect(jsonPath("$.phoneNumber").value(expected.getPhoneNumber()))
//                .andExpect(jsonPath("$.email").value(expected.getEmail()))
//                .andExpect(jsonPath("$.birthDate").value("12.12.1996"));
//        Mockito.verify(clientService, Mockito.times(1)).registerClient(Mockito.any());
//    }
}