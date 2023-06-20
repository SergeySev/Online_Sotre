package com.example.fb_project.service;

import com.example.fb_project.dto.ProductDto;
import com.example.fb_project.entity.*;
import com.example.fb_project.entity.enums.Color;
import com.example.fb_project.entity.enums.DeliveryType;
import com.example.fb_project.entity.enums.MadeCountry;
import com.example.fb_project.mapper.ProductMapper;
import com.example.fb_project.repository.BrandRepository;
import com.example.fb_project.repository.SubCategoryRepository;
import com.example.fb_project.repository.ProductRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.hibernate.query.IllegalQueryOperationException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ProductService {

    private final ProductRepository productRepository;

    private final ProductMapper productMapper;

    private final BrandRepository brandRepository;

    private final SubCategoryRepository subCategoryRepository;

    @Autowired
    private MongoOperations mongoOperations;

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
                DeliveryType.valueOf(productDto.getDeliveryType().toUpperCase()),
                Color.valueOf(productDto.getColour().toUpperCase()),
                subCategory,
                brand,
                productDto.getMainImageLink(),
                Boolean.parseBoolean(productDto.getIsHit()),
                Integer.valueOf(productDto.getInStock()),
                MadeCountry.valueOf(productDto.getMadeCountry().toUpperCase()));

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

    public Page<ProductDto> getAllByFilter(String priceFrom,
                                           String priceTo,
                                           List<String> brandTitle,
                                           List<String> madeCountries,
                                           List<String> colours,
                                           List<String> deliveryTypes,
                                           Pageable pageable) {
        Criteria criteria = new Criteria();
        criteria.andOperator((Criteria
                .where("price")
                .gte(new BigDecimal(priceFrom).setScale(2, RoundingMode.HALF_UP)))
                .lte(new BigDecimal(priceTo).setScale(2, RoundingMode.HALF_UP)));

        if (!brandTitle.isEmpty()) {
            List<Brand> brands = brandRepository.findByTitleIn(brandTitle);

            criteria.and("brand").in(brands);
        }

        if (!madeCountries.isEmpty()) {
            criteria.and("madeCountry").in(madeCountries.stream().map(String::toUpperCase).collect(Collectors.toList()));
        }

        if (!colours.isEmpty()) {
            criteria.and("colour").in(colours.stream().map(String::toUpperCase).collect(Collectors.toList()));
        }

        if (!deliveryTypes.isEmpty()) {
            criteria.and("deliveryType").in(deliveryTypes.stream().map(String::toUpperCase).collect(Collectors.toList()));
        }

        Query query = Query.query(criteria);

        long totalCount = mongoOperations.count(query, Product.class);
        query.with(pageable);

        List<Product> products = mongoOperations.find(query, Product.class);
        List<ProductDto> productsDto = productMapper.toDtoList(products);

        return new PageImpl<>(productsDto, pageable, totalCount);
    }
}
