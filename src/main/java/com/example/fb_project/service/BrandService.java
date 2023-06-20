package com.example.fb_project.service;

import com.example.fb_project.dto.BrandDto;
import com.example.fb_project.entity.Brand;
import com.example.fb_project.mapper.BrandMapper;
import com.example.fb_project.repository.BrandRepository;
import lombok.RequiredArgsConstructor;
import org.hibernate.query.IllegalQueryOperationException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;


@Service
@RequiredArgsConstructor
public class BrandService {
    private final BrandRepository brandRepository;
    private final BrandMapper brandMapper;


    public BrandDto addBrand(BrandDto brandDto) {
        if (brandDto.getTitle() == null || brandDto.getDescription() == null)
            throw new IllegalArgumentException("The data is missing");
        if (brandDto.getTitle().isBlank() || brandDto.getDescription().isBlank())
            throw new IllegalArgumentException("The data is missing");
        boolean isBrandExists = brandRepository.findByTitle(brandDto.getTitle()).isPresent();
        if (isBrandExists) throw new IllegalStateException("Brand already exists");
        Brand brand = new Brand(brandDto.getTitle(), brandDto.getDescription(), brandDto.getBrandImageLink());
        brandRepository.save(brand);
        return brandMapper.toDto(brand);
    }

    public Page<BrandDto> getBrands(Pageable pageable) {
        Page<Brand> brands = brandRepository.findAll(pageable);
        if (brands.isEmpty())
            throw new IllegalQueryOperationException("Brands doesn't exist in the Data Base");
        return brands.map(brandMapper::toDto);
    }

}



