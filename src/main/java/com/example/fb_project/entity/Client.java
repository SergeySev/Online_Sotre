package com.example.fb_project.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Getter
@Setter
@NoArgsConstructor
@ToString
@Document(collection = "clients")
public class Client {

    @Id
    private ObjectId id;

    private String firstName;
    private String lastName;
    private String phoneNumber;
    private String email;
    private String password;
    private boolean isBlocked;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    private LocalDateTime birthDate;
    private Address address;
    private List<Order> orders = new ArrayList<>();

    private String token;

    public Client(String first_name,
                  String last_name,
                  String phone_number,
                  String email,
                  String password,
                  LocalDateTime birthDate,
                  Address address) {
        this.firstName = first_name;
        this.lastName = last_name;
        this.phoneNumber = phone_number;
        this.email = email;
        this.password = password;
        this.isBlocked = false;
        this.createdAt = LocalDateTime.now();
        this.birthDate = birthDate;
        this.address = address;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Client client = (Client) o;
        return phoneNumber.equals(client.phoneNumber) && email.equals(client.email);
    }

    @Override
    public int hashCode() {
        return Objects.hash(phoneNumber, email);
    }
    //Bucket_list (foreign_key),
    //Favourite_product (foreign_key),
    //Shopping_list (foreign_key) (only back-end)
}
