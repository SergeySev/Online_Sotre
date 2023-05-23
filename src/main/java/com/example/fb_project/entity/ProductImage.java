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
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "product_image")
public class ProductImage {
    @Id
    private ObjectId id;

    @DBRef(lazy = true)
    @ToString.Exclude
    private Product product;

    private String imageType;

    @ToString.Exclude
    private byte[] image;
    private boolean isMain;

    public ProductImage(Product product, String imageType, byte[] image, boolean isMain) {
        this.product = product;
        this.imageType = imageType;
        this.image = image;
        this.isMain = isMain;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ProductImage that = (ProductImage) o;
        return id.equals(that.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}
