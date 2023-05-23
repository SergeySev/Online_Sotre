package com.example.fb_project.service;

import com.example.fb_project.dto.ProductCategoryCreateDto;
import com.example.fb_project.entity.MainCategory;
import com.example.fb_project.entity.ProductCategory;
import com.example.fb_project.entity.ProductCategoryImage;
import com.example.fb_project.mapper.ProductCategoryMapper;
import com.example.fb_project.repository.MainCategoryRepository;
import com.example.fb_project.repository.ProductCategoryImageRepository;
import com.example.fb_project.repository.ProductCategoryRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ProductCategoryService {

    private final ProductCategoryRepository productCategoryRepository;
    private final ProductCategoryImageRepository productCategoryImageRepository;
    private final MainCategoryRepository mainCategoryRepository;
    private final ImageService imageService;
    private final ProductCategoryMapper productCategoryMapper;

    @Transactional
    public boolean addProductCategoryImage(MultipartFile file, String title) {
        // 1. Check if product is not exist
        ProductCategory productCategory = getProductCategoryOrThrow(title);

        boolean productCategoryImage = productCategoryImageRepository.
                findByProductCategoryId(productCategory.getId()).isPresent();
        if (productCategoryImage) throw new IllegalStateException("The Product Category Image already exist");

        // 2. Check if image is not empty and Convert image to byte Array
        byte[] image = imageService.fileCheckAndToByteArray(file);

        // 3. Create collection brandImage
        String imageType = file.getContentType().substring(file.getContentType().indexOf("/") + 1);
        ProductCategoryImage productImage = new ProductCategoryImage(productCategory, imageType, image);

        productCategory.setProductCategoryImage(productImage);

        productCategoryImageRepository.save(productImage);
        productCategoryRepository.save(productCategory);
        return true;
    }

    public ProductCategory getProductCategoryOrThrow(String title) {
        return productCategoryRepository.findByTitle(title)
                .orElseThrow(() -> new IllegalStateException("The Product Category not found"));
    }

    @Transactional
    public ProductCategoryCreateDto addProductCategory(ProductCategoryCreateDto productCategoryCreateDto) {
        checkFieldsOfProductCategoryDto(productCategoryCreateDto);
        boolean productCategoryExist = productCategoryRepository.findByTitle(productCategoryCreateDto.getTitle()).isPresent();
        if (productCategoryExist) throw new IllegalStateException("The Product Category already exist");

        MainCategory mainCategory = mainCategoryRepository.
                findByTitle(productCategoryCreateDto.getMainCategory()).
                orElseThrow(() -> new IllegalStateException("Main category not found"));

        ProductCategory productCategory = new ProductCategory(productCategoryCreateDto.getTitle(), mainCategory);

        mainCategory.getProductCategories().add(productCategory);
        productCategoryRepository.save(productCategory);
        mainCategoryRepository.save(mainCategory);
        return new ProductCategoryCreateDto(productCategoryCreateDto.getTitle(), productCategoryCreateDto.getMainCategory());
    }

    public void checkFieldsOfProductCategoryDto(ProductCategoryCreateDto productCategoryCreateDto) {
        if (productCategoryCreateDto.getTitle() == null || productCategoryCreateDto.getTitle().isBlank() ||
        productCategoryCreateDto.getMainCategory() == null || productCategoryCreateDto.getMainCategory().isBlank()) {
            throw new IllegalArgumentException("The data is missing");
        }
    }

    public ResponseEntity<InputStreamResource> getProductCategoryImage(String title) {
        ProductCategory productCategory = getProductCategoryOrThrow(title);
        ProductCategoryImage productCategoryImage = productCategoryImageRepository.
                findByProductCategoryId(productCategory.getId()).
                orElseThrow(() -> new IllegalStateException("Product Category Image not found"));

        return imageService.getInputStreamResourceResponseEntity(productCategoryImage);
    }


    public List<ProductCategoryCreateDto> getAllProductCategory() {
        return productCategoryMapper.toListDto(productCategoryRepository.findAll());
    }

    public List<ProductCategoryCreateDto> getAllProductCategoryByMainCategory(String mainCategoryTitle) {
        MainCategory mainCategory = mainCategoryRepository.findByTitle(mainCategoryTitle).orElseThrow(() -> new IllegalStateException("Main category not found"));
        List<ProductCategory> allProductCategoryByMainCategoryTitle = productCategoryRepository.findByMainCategoryId(mainCategory.getId());
        if (allProductCategoryByMainCategoryTitle.isEmpty()) throw new IllegalStateException("Product category not found");
        return productCategoryMapper.toListDto(allProductCategoryByMainCategoryTitle);

    }
}
