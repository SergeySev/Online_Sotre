package com.example.fb_project.entity;

import com.example.fb_project.entity.enums.DeliveryType;
import jakarta.persistence.Id;
import lombok.*;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

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

    private BigDecimal price;

    private BigDecimal discountPrice;

    private String description;

    private Boolean isNew;

    private DeliveryType  deliveryType;

    private String colour;

    private LocalDateTime createdAt;

    private LocalDateTime updatedAt;

    private BigInteger purchase_quantity;

    @DBRef(lazy = true)
    private ProductCategory productCategory;

    @DBRef(lazy = true)
    private Brand brand;

    @DBRef(lazy = true)
    private List<ProductImage> productImage;

    public Product(String title,
                   BigDecimal price,
                   BigDecimal discountPrice,
                   String description,
                   Boolean isNew,
                   DeliveryType deliveryType,
                   String colour,
                   ProductCategory productCategory,
                   Brand brand) {
        this.title = title;
        this.price = price.setScale(2, RoundingMode.HALF_UP);
        this.discountPrice = discountPrice.setScale(2, RoundingMode.HALF_UP);
        this.description = description;
        this.isNew = isNew;
        this.deliveryType = deliveryType;
        this.colour = colour;
        this.productCategory = productCategory;
        this.brand = brand;
        this.createdAt = LocalDateTime.now();
        this.productImage = new ArrayList<>();
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
