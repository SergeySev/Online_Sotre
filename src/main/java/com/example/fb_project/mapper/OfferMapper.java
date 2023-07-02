package com.example.fb_project.mapper;

import com.example.fb_project.dto.OfferDto;
import com.example.fb_project.entity.Offer;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface OfferMapper {

    List<OfferDto> toDtoList(List<Offer> offers);

    OfferDto toDto(Offer offer);
}
