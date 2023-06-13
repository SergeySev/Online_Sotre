package com.example.fb_project.mapper;

import com.example.fb_project.dto.MainCategoryDto;
import com.example.fb_project.entity.MainCategory;
import org.bson.types.ObjectId;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface MainCategoryMapper {

    List<MainCategoryDto> toDtoList(List<MainCategory> mainCategories);

    MainCategoryDto toDto(MainCategory mainCategory);

    default String map(ObjectId id) {
        return id.toString();
    }

    default String map(MainCategory mainCategory) {
        return mainCategory.toString();
    }

}
