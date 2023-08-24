package com.example.fb_project.repository;

import com.example.fb_project.entity.Client;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
@RepositoryRestResource(exported = false)
public interface ClientRepository extends MongoRepository<Client, ObjectId> {
    Optional<Client> findByPhoneNumber(String phoneNumber);

    Optional<Client> findByEmail(String email);

    Optional<Client> findByToken(String token);
}
