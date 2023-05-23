package com.example.fb_project.repository;

import com.example.fb_project.entity.Product;
import org.bson.types.ObjectId;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
@RepositoryRestResource(exported = false)
public interface ProductRepository extends MongoRepository<Product, ObjectId> {
    Optional<Product> findByTitle(String productTitle);

    Page<Product> findAllByProductCategoryId(Pageable pageable, ObjectId id);
}
