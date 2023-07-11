package com.example.fb_project.dto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class BrandDto {

    private String id;

    private String title;

    private String description;

    private String brandImageLink;
}
