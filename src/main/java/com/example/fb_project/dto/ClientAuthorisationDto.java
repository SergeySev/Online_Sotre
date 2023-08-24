package com.example.fb_project.dto;

import lombok.*;

@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class ClientAuthorisationDto {

    private String password;

    private String email;
}
