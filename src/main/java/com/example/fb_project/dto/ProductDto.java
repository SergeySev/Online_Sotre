package com.example.fb_project.dto;

import lombok.*;

@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class ProductDto {

    private String brand;
    private String productCategory;

    private String id;

    private String title;

    private String description;
    private String isNew;

    private String price;

    private String discountPrice;

    private String deliveryType;

    private String colour;

}
