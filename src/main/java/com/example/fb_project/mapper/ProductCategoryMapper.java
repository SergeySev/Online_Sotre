package com.example.fb_project.mapper;

import com.example.fb_project.dto.ProductCategoryCreateDto;
import com.example.fb_project.entity.MainCategory;
import com.example.fb_project.entity.ProductCategory;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface ProductCategoryMapper {
    List<ProductCategoryCreateDto> toListDto(List<ProductCategory> productCategories);
    default String map(MainCategory mainCategory) {
        return mainCategory.getTitle();
    }

}
