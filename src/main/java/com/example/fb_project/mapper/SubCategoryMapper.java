package com.example.fb_project.mapper;

import com.example.fb_project.dto.SubCategoryDto;
import com.example.fb_project.entity.MainCategory;
import com.example.fb_project.entity.SubCategory;
import org.bson.types.ObjectId;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface SubCategoryMapper {
    List<SubCategoryDto> toListDto(List<SubCategory> productCategories);

    default String map(MainCategory mainCategory) {
        return mainCategory.getTitle();
    }

    default String map(ObjectId id) {
        return id.toString();
    }

    SubCategoryDto toDto(SubCategory subCategory);

}
