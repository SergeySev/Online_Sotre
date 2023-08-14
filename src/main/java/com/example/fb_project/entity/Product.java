package com.example.fb_project.entity;

import com.example.fb_project.entity.enums.Color;
import com.example.fb_project.entity.enums.DeliveryType;
import com.example.fb_project.entity.enums.MadeCountry;
import jakarta.persistence.Id;
import lombok.*;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;
import org.springframework.data.mongodb.core.mapping.FieldType;

import java.math.BigDecimal;
import java.math.BigInteger;
import java.math.RoundingMode;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "product")
public class Product {

    @Id
    private ObjectId id;

    private String title;

    @Field(targetType = FieldType.DECIMAL128)
    private BigDecimal price;

    private BigDecimal discountPrice;

    private String description;

    private Boolean isNew;

    private Boolean isHit;

    private Integer inStock;

    private DeliveryType deliveryType;

    private Color colour;

    private LocalDateTime createdAt;

    private LocalDateTime updatedAt;

    private BigInteger purchase_quantity;

    @DBRef(lazy = true)
    private SubCategory subCategory;

    private MadeCountry madeCountry;

    @DBRef(lazy = true)
    private Brand brand;

    private Characteristic characteristic;

    private String mainImageLink;

    private List<String> productImagesLinks;

    public Product(String title,
                   BigDecimal price,
                   BigDecimal discountPrice,
                   String description,
                   Boolean isNew,
                   DeliveryType deliveryType,
                   Color colour,
                   SubCategory subCategory,
                   Brand brand,
                   String mainImageLink,
                   boolean isHit,
                   Integer inStock,
                   MadeCountry madeCountry,
                   Characteristic characteristic) {
        this.title = title;
        this.price = price.setScale(2, RoundingMode.HALF_UP);
        this.discountPrice = discountPrice.setScale(2, RoundingMode.HALF_UP);
        this.description = description;
        this.isNew = isNew;
        this.deliveryType = deliveryType;
        this.colour = colour;
        this.subCategory = subCategory;
        this.brand = brand;
        this.createdAt = LocalDateTime.now();
        this.productImagesLinks = new ArrayList<>();
        this.isHit = isHit;
        this.inStock = inStock;
        this.mainImageLink = mainImageLink;
        this.madeCountry = madeCountry;
        this.characteristic = characteristic;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Product product = (Product) o;
        return title.equals(product.title) && description.equals(product.description);
    }

    @Override
    public int hashCode() {
        return Objects.hash(title, description);
    }
}
