package com.example.fb_project.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Objects;

@Getter
@Setter
@NoArgsConstructor
@ToString
@Document(collection = "brand_images")
public class BrandImage {

    @Id
    private ObjectId id;

    @DBRef(lazy = true)
    @ToString.Exclude
    private Brand brand;

    private String imageType;
    private byte[] image;

    public BrandImage(Brand brand, String imageType, byte[] image) {
        this.brand = brand;
        this.imageType = imageType;
        this.image = image;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        BrandImage that = (BrandImage) o;
        return id.equals(that.id) && brand.equals(that.brand);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, brand);
    }
}
