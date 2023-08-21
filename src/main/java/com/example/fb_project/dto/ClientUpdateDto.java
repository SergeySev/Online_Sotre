package com.example.fb_project.dto;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class ClientUpdateDto {

    private String id;

    private String password;

    private String address;

    private String phone;

}
