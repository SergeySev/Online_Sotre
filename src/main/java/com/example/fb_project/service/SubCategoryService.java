package com.example.fb_project.service;

import com.example.fb_project.dto.SubCategoryDto;
import com.example.fb_project.entity.MainCategory;
import com.example.fb_project.entity.SubCategory;
import com.example.fb_project.mapper.ProductMapper;
import com.example.fb_project.mapper.SubCategoryMapper;
import com.example.fb_project.repository.MainCategoryRepository;
import com.example.fb_project.repository.SubCategoryRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class SubCategoryService {

    private final SubCategoryRepository subCategoryRepository;

    private final MainCategoryRepository mainCategoryRepository;

    private final SubCategoryMapper subCategoryMapper;

    private final ProductMapper productMapper;

    @Transactional
    public SubCategoryDto addSubCategory(SubCategoryDto subCategoryDto) {
        boolean productCategoryExist = subCategoryRepository.
                findByTitle(subCategoryDto.getTitle()).isPresent();

        if (productCategoryExist) throw new IllegalStateException("The Product Category already exist");

        MainCategory mainCategory = mainCategoryRepository.
                findByTitle(subCategoryDto.getMainCategory()).
                orElseThrow(() -> new IllegalStateException("Main category not found"));

        SubCategory subCategory = new SubCategory(subCategoryDto.getTitle(),
                mainCategory,
                subCategoryDto.getImageLink());

        mainCategory.getSubCategories().add(subCategory);
        subCategoryRepository.save(subCategory);
        mainCategoryRepository.save(mainCategory);
        return subCategoryMapper.toDto(subCategory);
    }


    public List<SubCategoryDto> getAlLSubCategory() {
        return subCategoryMapper.toListDto(subCategoryRepository.findAll());
    }


    public SubCategoryDto getSubCategoryById(String id) {
        ObjectId objectId = new ObjectId(id);
        SubCategory subCategory = subCategoryRepository.
                findAllById(objectId).
                orElseThrow(() -> new IllegalStateException("Sub Category with id: "
                        + id + "doesn't exist in the Data Base"));

        SubCategoryDto subCategoryDto = subCategoryMapper.toDto(subCategory);
        subCategoryDto.setProductDtoList(productMapper.toDtoList(subCategory.getProducts()));
        return subCategoryDto;
    }

    public List<SubCategoryDto> getAllSubCategoryByMainCategory(String mainCategoryTitle) {
        MainCategory mainCategory = mainCategoryRepository.
                findByTitle(mainCategoryTitle).
                orElseThrow(() -> new IllegalStateException("Main category not found"));

        List<SubCategory> allSubCategoryByMainCategoryTitle = subCategoryRepository.
                findByMainCategoryId(mainCategory.getId());

        if (allSubCategoryByMainCategoryTitle.isEmpty()) {
            throw new IllegalStateException("Sub category not found");
        }
        return subCategoryMapper.toListDto(allSubCategoryByMainCategoryTitle);
    }

    public SubCategoryDto getSubCategoryByTitle(String title) {
        SubCategory subCategory = subCategoryRepository.findByTitle(title).
                orElseThrow(() -> new IllegalStateException("Sub Category with id: "
                        + title + "doesn't exist in the Data Base"));

        SubCategoryDto subCategoryDto = subCategoryMapper.toDto(subCategory);
        subCategoryDto.setProductDtoList(productMapper.toDtoList(subCategory.getProducts()));
        return subCategoryDto;
    }
}
