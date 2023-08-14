package com.example.fb_project.mapper;

import com.example.fb_project.dto.CharacteristicDto;
import com.example.fb_project.entity.Characteristic;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")

public interface CharacteristicMapper {
    CharacteristicDto toDto(Characteristic characteristic);

}
