package com.example.fb_project.service;

import com.example.fb_project.dto.ProductDto;
import com.example.fb_project.entity.*;
import com.example.fb_project.entity.enums.DeliveryType;
import com.example.fb_project.mapper.ProductMapper;
import com.example.fb_project.repository.BrandRepository;
import com.example.fb_project.repository.ProductCategoryRepository;
import com.example.fb_project.repository.ProductImageRepository;
import com.example.fb_project.repository.ProductRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.bson.types.ObjectId;
import org.hibernate.query.IllegalQueryOperationException;
import org.springframework.core.io.InputStreamResource;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ProductService {

    private final ProductRepository productRepository;

    private final ProductImageRepository productImageRepository;

    private final ImageService imageService;

    private final ProductMapper productMapper;

    private final BrandRepository brandRepository;
    private final ProductCategoryRepository productCategoryRepository;

    @Transactional
    public boolean addProductImage(MultipartFile file, String productTitle) {
        Product product = getProductOrThrow(productTitle);

        byte[] image = imageService.fileCheckAndToByteArray(file);

        String imageType = imageService.getImageType(file);

        ProductImage productImage = new ProductImage(product, imageType, image, false);

        product.getProductImage().add(productImage);

        productImageRepository.save(productImage);
        productRepository.save(product);
        return true;
    }

    @Transactional
    public boolean addMainProductImage(MultipartFile file, String productTitle) {
        Product product = getProductOrThrow(productTitle);

        boolean isMainExists = productImageRepository.findByProductIdAndIsMain(product.getId(), true).isPresent();

        if (isMainExists) throw new IllegalStateException("Main image already exist");

        byte[] image = imageService.fileCheckAndToByteArray(file);

        String imageType = imageService.getImageType(file);

        ProductImage productImage = new ProductImage(product, imageType, image, true);

        product.getProductImage().add(productImage);

        productImageRepository.save(productImage);
        productRepository.save(product);
        return true;
    }

    private Product getProductOrThrow(String productTitle) {
        return productRepository.findByTitle(productTitle).
                orElseThrow(() -> new RuntimeException("Product not found"));
    }

    @Transactional
    public ProductDto addProduct(ProductDto productDto) {
        checkDataFromProductDto(productDto);
        boolean isProductExist = productRepository.findByTitle(productDto.getTitle()).isPresent();
        if (isProductExist) {
            throw new IllegalStateException("Product already exist");
        }
        Brand brand = brandRepository.
                findByTitle(productDto.getBrand()).
                orElseThrow(() -> new IllegalQueryOperationException("Brand not found"));

        ProductCategory productCategory = productCategoryRepository.
                findByTitle(productDto.getProductCategory()).
                orElseThrow(() -> new IllegalQueryOperationException("Product category not found"));

        Product product = new Product(productDto.getTitle(),
                BigDecimal.valueOf(Float.parseFloat(productDto.getPrice())),
                BigDecimal.valueOf(Float.parseFloat(productDto.getDiscountPrice())),
                productDto.getDescription(),
                Boolean.valueOf(productDto.getIsNew()),
                DeliveryType.valueOf(productDto.getDeliveryType()),
                productDto.getColour(),
                productCategory,
                brand);


        brand.getProducts().add(product);
        productCategory.getProducts().add(product);
        productRepository.save(product);
        brandRepository.save(brand);
        productCategoryRepository.save(productCategory);
        return productMapper.toDto(product);
    }

    public void checkDataFromProductDto(ProductDto productDto) {
        if (productDto.getTitle() == null || productDto.getTitle().isBlank() ||
                productDto.getPrice() == null || productDto.getPrice().isBlank() ||
                productDto.getDiscountPrice() == null || productDto.getDiscountPrice().isBlank() ||
                productDto.getDescription() == null || productDto.getDescription().isBlank() ||
                productDto.getDeliveryType() == null || productDto.getDeliveryType().isBlank() ||
                productDto.getColour() == null || productDto.getColour().isBlank() ||
                productDto.getProductCategory() == null || productDto.getProductCategory().isBlank() ||
                productDto.getBrand() == null || productDto.getBrand().isBlank()
        ) throw new IllegalArgumentException("The Data is missing");
    }

    public ResponseEntity<InputStreamResource> getMainProductImage(String productTitle) {
        Product product = getProductOrThrow(productTitle);
        ProductImage productImage = productImageRepository.
                findByProductIdAndIsMain(product.getId(), true).
                orElseThrow(() -> new IllegalStateException("Main image not found"));
        return imageService.getInputStreamResourceResponseEntity(productImage);
    }

    public ResponseEntity<InputStreamResource> getProductImage(ObjectId id) {
        ProductImage productImage = productImageRepository.findById(id).
                orElseThrow(() -> new IllegalStateException("Image with this ID doesn't exist in the Data Base"));
        return imageService.getInputStreamResourceResponseEntity(productImage);
    }

    public List<String> getAllProductImagesId(ObjectId id) {
        List<ProductImage> productImages = productImageRepository.findAllByProductId(id);
        if (productImages.isEmpty()) throw new IllegalStateException("Images not found");

        List<String> imagesId = new ArrayList<>();
        for (ProductImage image : productImages) {
            imagesId.add(image.getId().toString());
        }
        return imagesId;
    }


    public Page<ProductDto> getAllProductsByProductCategory(Pageable pageable, String productCategoryTitle) {
        ProductCategory productCategory = productCategoryRepository.
                findByTitle(productCategoryTitle).
                orElseThrow(() -> new IllegalQueryOperationException("Product category not found"));

        Page<Product> products = productRepository.findAllByProductCategoryId(pageable, productCategory.getId());
        if (products.isEmpty()) throw new IllegalQueryOperationException("Product not found");
        return products.map(productMapper::toDto);
    }


}
