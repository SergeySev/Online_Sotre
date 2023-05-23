package com.example.fb_project.service;

import com.example.fb_project.dto.BrandCreateDto;
import com.example.fb_project.entity.Brand;
import com.example.fb_project.entity.BrandImage;
import com.example.fb_project.mapper.BrandMapper;
import com.example.fb_project.repository.BrandImageRepository;
import com.example.fb_project.repository.BrandRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.hibernate.query.IllegalQueryOperationException;
import org.springframework.core.io.InputStreamResource;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;


@Service
@RequiredArgsConstructor
public class BrandService {
    private final BrandImageRepository brandImageRepository;
    private final BrandRepository brandRepository;
    private final BrandMapper brandMapper;

    private final ImageService imageService;

    @Transactional
    public boolean addBrandImage(MultipartFile file, String title) {
        // 1. Check if brand is not exist
        Brand brand = getBrandOrThrow(title);
        boolean brandImageExist = brandImageRepository.findByBrandId(brand.getId()).isPresent();
        if (brandImageExist) throw new IllegalStateException("Brand Image already exists");

        // 2. Check if image is not empty and Convert image to byte Array
        byte[] image = imageService.fileCheckAndToByteArray(file);

        // 3. Create collection brandImage
        String imageType = imageService.getImageType(file);
        BrandImage brandImage = new BrandImage(brand, imageType, image);

        brand.setBrandImage(brandImage);

        brandImageRepository.save(brandImage);
        brandRepository.save(brand);
        return true;
    }

    private Brand getBrandOrThrow(String title) {
        return brandRepository.findByTitle(title).
                orElseThrow(() -> new IllegalStateException("The Brand not found"));
    }


    public BrandCreateDto addBrand(BrandCreateDto brandCreateDto) {
        if (brandCreateDto.getTitle() == null || brandCreateDto.getDescription() == null) throw new IllegalArgumentException("The data is missing");
        if (brandCreateDto.getTitle().isBlank() || brandCreateDto.getDescription().isBlank()) throw new IllegalArgumentException("The data is missing");
        boolean isBrandExists = brandRepository.findByTitle(brandCreateDto.getTitle()).isPresent();
        if (isBrandExists) throw new IllegalStateException("Brand already exists");
        Brand brand = new Brand(brandCreateDto.getTitle(), brandCreateDto.getDescription());
        brandRepository.save(brand);
        return brandCreateDto;
    }

    public ResponseEntity<InputStreamResource> getBrandImage(String brandTitle) {
        Brand brand = getBrandOrThrow(brandTitle);
        BrandImage brandImage = brandImageRepository.findByBrandId(brand.getId()).
                orElseThrow(() -> new IllegalStateException("Brand Image not found"));

        return imageService.getInputStreamResourceResponseEntity(brandImage);
    }


    public Page<BrandCreateDto> getBrand(Pageable pageable) {
        Page<Brand> brands = brandRepository.findAll(pageable);
        if (brands.isEmpty())
            throw new IllegalQueryOperationException("Brands doesn't exist in the Data Base");
        return brands.map(brandMapper::toDto);
    }

}



