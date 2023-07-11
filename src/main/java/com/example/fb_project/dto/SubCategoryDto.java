package com.example.fb_project.dto;

import lombok.*;

import java.util.List;

@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class SubCategoryDto {

    private String id;

    private String title;

    private String mainCategory;

    private String imageLink;

    private List<ProductDto> productDtoList;
}
