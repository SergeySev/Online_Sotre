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
@Document(collection = "product_category")
public class ProductCategory {

    @Id
    private ObjectId id;

    private String title;

    @DBRef(lazy = true)
    @ToString.Exclude
    private MainCategory mainCategory;

    @DBRef(lazy = true)
    @ToString.Exclude
    private ProductCategoryImage productCategoryImage;

    @DBRef(lazy = true)
    @ToString.Exclude
    private List<Product> products;

    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

    public ProductCategory(String title,
                           MainCategory mainCategory) {
        this.title = title;
        this.mainCategory = mainCategory;
        this.createdAt = LocalDateTime.now();
        this.updatedAt = LocalDateTime.now();
        this.products = new ArrayList<>();
    }


    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ProductCategory that = (ProductCategory) o;
        return id.equals(that.id) && title.equals(that.title);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, title);
    }
}
