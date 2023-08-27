package com.example.fb_project.dto;

import com.example.fb_project.entity.Address;
import com.example.fb_project.entity.Order;
import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class ClientDto {
    private String id;
    private String firstName;
    private String lastName;
    private String phoneNumber;
    private String email;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd.MM.yyyy")
    private LocalDateTime birthDate;
    private Address address;
    private List<OrderDto> orders = new ArrayList<>();
    private String token;
}
