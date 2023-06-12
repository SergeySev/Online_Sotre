package com.example.fb_project.service;

import com.example.fb_project.dto.ProductDto;
import com.example.fb_project.entity.*;
import com.example.fb_project.entity.enums.DeliveryType;
import com.example.fb_project.mapper.ProductMapper;
import com.example.fb_project.repository.BrandRepository;
import com.example.fb_project.repository.SubCategoryRepository;
import com.example.fb_project.repository.ProductRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.hibernate.query.IllegalQueryOperationException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ProductService {

    private final ProductRepository productRepository;

    private final ProductMapper productMapper;

    private final BrandRepository brandRepository;

    private final SubCategoryRepository subCategoryRepository;

    @Transactional
    public ProductDto addProduct(ProductDto productDto) {
        boolean isProductExist = productRepository.findByTitle(productDto.getTitle()).isPresent();
        if (isProductExist) {
            throw new IllegalStateException("Product already exist");
        }
        Brand brand = brandRepository.
                findByTitle(productDto.getBrand()).
                orElseThrow(() -> new IllegalQueryOperationException("Brand not found"));


        SubCategory subCategory = subCategoryRepository.
                findByTitle(productDto.getSubCategory()).
                orElseThrow(() -> new IllegalQueryOperationException("Sub category not found"));

        Product product = new Product(productDto.getTitle(),
                BigDecimal.valueOf(Float.parseFloat(productDto.getPrice())),
                BigDecimal.valueOf(Float.parseFloat(productDto.getDiscountPrice())),
                productDto.getDescription(),
                Boolean.valueOf(productDto.getIsNew()),
                DeliveryType.valueOf(productDto.getDeliveryType()),
                productDto.getColour(),
                subCategory,
                brand,
                productDto.getMainImageLink(),
                Boolean.parseBoolean(productDto.getIsHit()),
                Integer.valueOf(productDto.getInStock()),
                productDto.getMadeCountry());
        product.getProductImagesLinks().add(productDto.getMainImageLink());
        List<String> imagesFromDto = productDto.getProductImagesLinks();

        for (String image :
                imagesFromDto) {
            product.getProductImagesLinks().add(image);
        }

        brand.getProducts().add(product);
        subCategory.getProducts().add(product);
        productRepository.save(product);
        brandRepository.save(brand);
        subCategoryRepository.save(subCategory);
        return productMapper.toDto(product);
    }

    public Page<ProductDto> getAllProductsBySubCategory(Pageable pageable, String productCategoryTitle) {
        SubCategory subCategory = subCategoryRepository.
                findByTitle(productCategoryTitle).
                orElseThrow(() -> new IllegalQueryOperationException("Sub category not found"));

        Page<Product> products = productRepository.findAllBySubCategoryId(pageable, subCategory.getId());
        if (products.isEmpty()) throw new IllegalQueryOperationException("Product not found");
        return products.map(productMapper::toDto);
    }

    public Page<ProductDto> getAllProducts(Pageable pageable) {
        Page<Product> products = productRepository.findAll(pageable);
        if (products.isEmpty()) throw new IllegalQueryOperationException("Product not found");
        return products.map(productMapper::toDto);
    }

    public Page<ProductDto> getAllNovelties(Pageable pageable) {
        Page<Product> products = productRepository.findAllByIsNew(pageable, true);
        if (products.isEmpty()) throw new IllegalQueryOperationException("Product not found");
        return products.map(productMapper::toDto);
    }

    public Page<ProductDto> getAllProductsWithoutDiscount(Pageable pageable) {
        Page<Product> products = productRepository.findAllWithNonZeroDiscountPrice(pageable);
        if (products.isEmpty()) throw new IllegalQueryOperationException("Product with discount price not found");
        return products.map(productMapper::toDto);
    }

    public Page<ProductDto> getAllProductsHit(Pageable pageable) {
        Page<Product> products = productRepository.findAllByIsHit(pageable, true);
        if (products.isEmpty()) throw new IllegalQueryOperationException("Product not found");
        return products.map(productMapper::toDto);
    }
}
