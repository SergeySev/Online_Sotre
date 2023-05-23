package com.example.fb_project.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Getter
@Setter
@NoArgsConstructor
@ToString
@Document(collection = "brand")
public class Brand {

    @Id
    private ObjectId id;

    @DBRef(lazy = true)
    @ToString.Exclude
    private List<Product> products;

    private String title;

    private String description;

    @DBRef(lazy = true)
    @ToString.Exclude
    private BrandImage brandImage;

    public Brand(String title, String description) {
        this.title = title;
        this.description = description;
        this.products = new ArrayList<>();
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Brand brand = (Brand) o;
        return title.equals(brand.title);
    }

    @Override
    public int hashCode() {
        return Objects.hash(title);
    }
}
