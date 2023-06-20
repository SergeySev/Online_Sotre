package com.example.fb_project.repository;

import com.example.fb_project.entity.ChangeLog;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
@RepositoryRestResource(exported = false)
public interface ChangeLogRepository extends MongoRepository<ChangeLog, ObjectId> {
    Optional<ChangeLog> findByIsStarted(boolean b);

    Optional<ChangeLog> findByIsUpdated(boolean b);
}
