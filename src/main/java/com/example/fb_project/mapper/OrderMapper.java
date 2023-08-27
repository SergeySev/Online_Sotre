package com.example.fb_project.mapper;

import com.example.fb_project.dto.OrderDto;
import com.example.fb_project.entity.Brand;
import com.example.fb_project.entity.Order;
import org.bson.types.ObjectId;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface OrderMapper {

    OrderDto toDto(Order order);

    default String map(ObjectId id) {
        return id.toString();
    }
    default String map(Brand brand) {
        return brand.getTitle();
    }
}
