package com.example.fb_project.mapper;

import com.example.fb_project.dto.ProductDto;
import com.example.fb_project.entity.Product;
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
public class ProductMapperImpl implements ProductMapper {

    @Override
    public ProductDto toDto(Product product) {
        if ( product == null ) {
            return null;
        }

        ProductDto productDto = new ProductDto();

        productDto.setBrand( map( product.getBrand() ) );
        productDto.setProductCategory( map( product.getProductCategory() ) );
        productDto.setId( map( product.getId() ) );
        productDto.setTitle( product.getTitle() );
        productDto.setDescription( product.getDescription() );
        if ( product.getIsNew() != null ) {
            productDto.setIsNew( String.valueOf( product.getIsNew() ) );
        }
        if ( product.getPrice() != null ) {
            productDto.setPrice( product.getPrice().toString() );
        }
        if ( product.getDiscountPrice() != null ) {
            productDto.setDiscountPrice( product.getDiscountPrice().toString() );
        }
        if ( product.getDeliveryType() != null ) {
            productDto.setDeliveryType( product.getDeliveryType().name() );
        }
        productDto.setColour( product.getColour() );

        return productDto;
    }

    @Override
    public List<ProductDto> toDtoList(List<Product> products) {
        if ( products == null ) {
            return null;
        }

        List<ProductDto> list = new ArrayList<ProductDto>( products.size() );
        for ( Product product : products ) {
            list.add( toDto( product ) );
        }

        return list;
    }
}
