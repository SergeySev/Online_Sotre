package com.example.fb_project.repository;

import com.example.fb_project.entity.SubCategory;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
@RepositoryRestResource(exported = false)
public interface SubCategoryRepository extends MongoRepository<SubCategory, ObjectId> {
    Optional<SubCategory> findByTitle(String title);

    List<SubCategory> findByMainCategoryId(ObjectId id);

    Optional<SubCategory> findAllById(ObjectId objectId);
}
