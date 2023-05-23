package com.example.fb_project.mapper;

import com.example.fb_project.dto.BrandCreateDto;
import com.example.fb_project.entity.Brand;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")

public interface BrandMapper {
    BrandCreateDto toDto(Brand brand);


}
