package com.example.fb_project.controller;

import com.example.fb_project.service.ClientService;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;


@WebMvcTest(ClientController.class)
@DisplayName("ClientController test class")
@WithMockUser
class ClientControllerTest {

    @MockBean
    ClientService clientService;

    @Autowired
    MockMvc mockMvc;

    @Test
    void getAllClientByPage() throws Exception {
        Mockito.when(clientService.getClientsByPage(Mockito.any())).thenReturn(Mockito.any());

        mockMvc.perform(MockMvcRequestBuilders.get("/api/v1/client/get_clients?page=1&size=3"))
                .andExpect(status().isOk());
    }
}