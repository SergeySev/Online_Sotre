package com.example.fb_project.dto;

import lombok.*;

@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class ProductCategoryCreateDto {
    private String title;
    private String mainCategory;
}
