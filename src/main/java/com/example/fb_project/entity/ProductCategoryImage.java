package com.example.fb_project.entity;

import jakarta.persistence.Id;
import lombok.*;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Objects;

@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "product_category_image")
public class ProductCategoryImage {

    @Id
    private ObjectId id;

    private String imageType;

    private byte[] image;

    @DBRef(lazy = true)
    private ProductCategory productCategory;

    public ProductCategoryImage(ProductCategory productCategory,
                                String imageType,
                                byte[] image) {
        this.imageType = imageType;
        this.image = image;
        this.productCategory = productCategory;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ProductCategoryImage that = (ProductCategoryImage) o;
        return id.equals(that.id) && productCategory.equals(that.productCategory);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, productCategory);
    }
}
