package com.example.fb_project.entity;

import jakarta.persistence.Id;
import lombok.*;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Document(collection = "sub_category")
public class SubCategory {

    @Id
    private ObjectId id;

    private String title;

    @DBRef(lazy = true)
    @ToString.Exclude
    private MainCategory mainCategory;

    private String imageLink;

    @DBRef(lazy = false)
    @ToString.Exclude
    private List<Product> products;

    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

    public SubCategory(String title,
                       MainCategory mainCategory,
                       String imageLink) {
        this.title = title;
        this.mainCategory = mainCategory;
        this.createdAt = LocalDateTime.now();
        this.updatedAt = LocalDateTime.now();
        this.products = new ArrayList<>();
        this.imageLink = imageLink;
    }


    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        SubCategory that = (SubCategory) o;
        return id.equals(that.id) && title.equals(that.title);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, title);
    }
}
