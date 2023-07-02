package com.example.fb_project.service;

import com.example.fb_project.dto.ProductDto;
import com.example.fb_project.entity.Brand;
import com.example.fb_project.entity.Product;
import com.example.fb_project.entity.SubCategory;
import com.example.fb_project.entity.enums.Color;
import com.example.fb_project.entity.enums.DeliveryType;
import com.example.fb_project.entity.enums.MadeCountry;
import com.example.fb_project.mapper.ProductMapper;
import com.example.fb_project.repository.BrandRepository;
import com.example.fb_project.repository.ProductRepository;
import com.example.fb_project.repository.SubCategoryRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.bson.Document;
import org.hibernate.query.IllegalQueryOperationException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ProductService {

    private final ProductRepository productRepository;

    private final ProductMapper productMapper;

    private final BrandRepository brandRepository;

    private final SubCategoryRepository subCategoryRepository;

    private final MongoTemplate mongoTemplate;

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
                productDto.getPrice(),
                productDto.getDiscountPrice(),
                productDto.getDescription(),
                productDto.getIsNew(),
                DeliveryType.valueOf(productDto.getDeliveryType().toUpperCase()),
                Color.valueOf(productDto.getColour().toUpperCase()),
                subCategory,
                brand,
                productDto.getMainImageLink(),
                productDto.getIsHit(),
                productDto.getInStock(),
                MadeCountry.valueOf(productDto.getMadeCountry().toUpperCase()));

        product.getProductImagesLinks().add(productDto.getMainImageLink());
        List<String> imagesFromDto = productDto.getProductImagesLinks();

        for (String image : imagesFromDto) {
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

    public Document getAllByFilter(String priceFrom,
                                   String priceTo,
                                   List<String> brandTitle,
                                   List<String> madeCountries,
                                   List<String> colours,
                                   List<String> deliveryTypes,
                                   Pageable pageable
    ) {
        Criteria criteria = new Criteria();

        Integer priceFromInInteger = Integer.valueOf(priceFrom);
        Integer priceToInInteger = Integer.valueOf(priceTo);

        if (!priceFrom.isEmpty() && !priceTo.isEmpty()) {
            criteria.and("price").gte(priceFromInInteger).lte(priceToInInteger);
        }

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


        Query totalCountQuery = Query.query(criteria);
        long totalElement = mongoTemplate.count(totalCountQuery, Product.class);


        Query query = Query.query(criteria).with(pageable);

        int totalPages = (int) Math.ceil((double) totalElement / pageable.getPageSize());
        System.out.println(totalPages);
        System.out.println(totalElement);

        List<Product> products = mongoTemplate.find(query, Product.class);

        List<ProductDto> productsDto = productMapper.toDtoList(products);

        Document document = new Document();

        int page = pageable.getPageNumber() + 1;

        document.put("content", productsDto);
        document.put("totalPages", totalPages);
        document.put("totalElement", totalElement);
        document.put("elementOnPage", productsDto.size());
        document.put("pageNumber", page);
        document.put("lastPage", totalPages == page);
        document.put("firstPage", page == 1);

        return document;
    }
}
