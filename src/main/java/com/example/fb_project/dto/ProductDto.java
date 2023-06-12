package com.example.fb_project.dto;

import lombok.*;

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

    private String price;

    private String discountPrice;

    private String description;

    private String subCategory;

    private String isNew;

    private String deliveryType;

    private String colour;

    private String mainImageLink;

    private List<String> productImagesLinks;

    private String madeCountry;

    private String inStock;

    private String isHit;

}
