package com.example.fb_project.mapper;

import com.example.fb_project.dto.ProductCategoryCreateDto;
import com.example.fb_project.entity.ProductCategory;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-05-21T00:04:23+0200",
    comments = "version: 1.5.3.Final, compiler: javac, environment: Java 17.0.2 (Eclipse Adoptium)"
)
@Component
public class ProductCategoryMapperImpl implements ProductCategoryMapper {

    @Override
    public List<ProductCategoryCreateDto> toListDto(List<ProductCategory> productCategories) {
        if ( productCategories == null ) {
            return null;
        }

        List<ProductCategoryCreateDto> list = new ArrayList<ProductCategoryCreateDto>( productCategories.size() );
        for ( ProductCategory productCategory : productCategories ) {
            list.add( productCategoryToProductCategoryCreateDto( productCategory ) );
        }

        return list;
    }

    protected ProductCategoryCreateDto productCategoryToProductCategoryCreateDto(ProductCategory productCategory) {
        if ( productCategory == null ) {
            return null;
        }

        ProductCategoryCreateDto productCategoryCreateDto = new ProductCategoryCreateDto();

        productCategoryCreateDto.setTitle( productCategory.getTitle() );
        productCategoryCreateDto.setMainCategory( map( productCategory.getMainCategory() ) );

        return productCategoryCreateDto;
    }
}
