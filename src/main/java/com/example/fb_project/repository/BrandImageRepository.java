package com.example.fb_project.repository;

import com.example.fb_project.entity.BrandImage;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
@RepositoryRestResource(exported = false)
public interface BrandImageRepository extends MongoRepository<BrandImage, ObjectId> {

    Optional<BrandImage> findByBrandId(ObjectId id);
}
