package com.example.fb_project.dto;

import lombok.*;

import java.math.BigDecimal;
import java.util.List;

@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class ProductDto {
    private String id;

    private String title;

    private String brand;

    private BigDecimal price;

    private BigDecimal discountPrice;

    private String description;

    private String subCategory;

    private Boolean isNew;

    private String deliveryType;

    private String colour;

    private String mainImageLink;

    private List<String> productImagesLinks;

    private String madeCountry;

    private Integer inStock;

    private Boolean isHit;

}
