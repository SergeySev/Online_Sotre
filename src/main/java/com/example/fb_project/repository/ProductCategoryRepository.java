package com.example.fb_project.repository;

import com.example.fb_project.entity.ProductCategory;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
@RepositoryRestResource(exported = false)
public interface ProductCategoryRepository extends MongoRepository<ProductCategory, ObjectId> {
    Optional<ProductCategory> findByTitle(String title);

    List<ProductCategory> findByMainCategoryId(ObjectId id);
}
