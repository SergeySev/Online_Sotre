package com.example.fb_project.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.core.io.InputStreamResource;

import java.util.List;

@Getter
@Setter
@ToString
@AllArgsConstructor
public class ProductImagesDto {

    private List<InputStreamResource> images;

}
