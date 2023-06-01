package com.example.fb_project.mapper;

import com.example.fb_project.dto.BrandDto;
import com.example.fb_project.entity.Brand;
import org.bson.types.ObjectId;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")

public interface BrandMapper {
    BrandDto toDto(Brand brand);

    default String map(ObjectId id) {
        return id.toString();
    }

}
