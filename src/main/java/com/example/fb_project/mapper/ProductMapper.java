package com.example.fb_project.mapper;

import com.example.fb_project.dto.CharacteristicDto;
import com.example.fb_project.dto.ProductDto;
import com.example.fb_project.entity.*;
import org.bson.types.ObjectId;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel = "spring")
public interface ProductMapper {

    @Mapping(target = "subCategoryTitle", source = "subCategory.title")
    @Mapping(target = "subCategoryId", source = "subCategory.id")
    @Mapping(target = "mainCategoryTitle", source = "subCategory.mainCategory.title")
    @Mapping(target = "mainCategoryId", source = "subCategory.mainCategory.id")
    ProductDto toDto(Product product);

    List<ProductDto> toDtoList(List<Product> products);
    default String map(Brand brand) {
        return brand.getTitle();
    }
    default String map(ObjectId id) {
        return id.toString();
    }
}
