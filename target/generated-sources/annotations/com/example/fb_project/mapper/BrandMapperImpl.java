package com.example.fb_project.mapper;

import com.example.fb_project.dto.BrandCreateDto;
import com.example.fb_project.entity.Brand;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-05-21T00:04:23+0200",
    comments = "version: 1.5.3.Final, compiler: javac, environment: Java 17.0.2 (Eclipse Adoptium)"
)
@Component
public class BrandMapperImpl implements BrandMapper {

    @Override
    public BrandCreateDto toDto(Brand brand) {
        if ( brand == null ) {
            return null;
        }

        BrandCreateDto brandCreateDto = new BrandCreateDto();

        brandCreateDto.setTitle( brand.getTitle() );
        brandCreateDto.setDescription( brand.getDescription() );

        return brandCreateDto;
    }
}
