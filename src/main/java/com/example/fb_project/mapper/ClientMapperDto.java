package com.example.fb_project.mapper;

import com.example.fb_project.dto.ClientDto;
import com.example.fb_project.entity.Clients;
import org.bson.types.ObjectId;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface ClientMapperDto {
    ClientDto toDto(Clients client);

    default String map(ObjectId id) {
        return id.toString();
    }
}
