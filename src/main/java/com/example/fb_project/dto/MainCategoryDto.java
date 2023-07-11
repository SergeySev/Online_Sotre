package com.example.fb_project.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.List;

@Getter
@Setter
@ToString
@AllArgsConstructor
public class MainCategoryDto {

    private String id;

    private String title;

    private List<SubCategoryDto> subCategories;
}
