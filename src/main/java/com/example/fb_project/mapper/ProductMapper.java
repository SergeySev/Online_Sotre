package com.example.fb_project.mapper;

import com.example.fb_project.dto.ProductDto;
import com.example.fb_project.entity.Brand;
import com.example.fb_project.entity.Product;
import com.example.fb_project.entity.ProductCategory;
import org.bson.types.ObjectId;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")

public interface ProductMapper {
    ProductDto toDto(Product product);

    List<ProductDto> toDtoList(List<Product> products);
    default String map(Brand brand) {
        return brand.getTitle();
    }
    default String map(ProductCategory productCategory) {
        return productCategory.getTitle();
    }
    default String map(ObjectId id) {
        return id.toString();
    }


}
