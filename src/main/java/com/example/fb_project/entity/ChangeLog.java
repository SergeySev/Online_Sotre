package com.example.fb_project.entity;

import jakarta.persistence.Id;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Getter
@Setter
@ToString
@NoArgsConstructor
@Document(collection = "change_log")
public class ChangeLog {

    @Id
    private ObjectId id;

    private Boolean isStarted;
    private Boolean isUpdated;

    private LocalDateTime createdAt;

    private LocalDateTime updatedAt;

}
