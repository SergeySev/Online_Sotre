package com.example.fb_project.mapper;

import com.example.fb_project.dto.MainCategoryDto;
import com.example.fb_project.entity.MainCategory;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface MainCategoryMapper {
    List<MainCategoryDto> toDtoList(List<MainCategory> mainCategories);
}
