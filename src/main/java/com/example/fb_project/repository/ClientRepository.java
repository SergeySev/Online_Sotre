package com.example.fb_project.repository;

import com.example.fb_project.entity.Clients;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
@RepositoryRestResource(exported = false)
public interface ClientRepository extends MongoRepository<Clients, Long> {
    Optional<Clients> findByPhoneNumber(String phoneNumber);

    Optional<Clients> findByEmail(String email);

}
