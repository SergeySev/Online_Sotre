package com.example.fb_project.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class Address {

    private String country;
    private String city;
    private String street;
    private String houseNumber;
    private String apartmentNumber;
    private String postCode;

}
