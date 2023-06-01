package com.example.fb_project.service;

import com.example.fb_project.dto.MainCategoryDto;
import com.example.fb_project.dto.SubCategoryDto;
import com.example.fb_project.entity.MainCategory;
import com.example.fb_project.mapper.MainCategoryMapper;
import com.example.fb_project.mapper.SubCategoryMapper;
import com.example.fb_project.repository.MainCategoryRepository;
import lombok.RequiredArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class MainCategoryService {
    private final MainCategoryRepository mainCategoryRepository;

    private final MainCategoryMapper mainCategoryMapper;

    private final SubCategoryMapper subCategoryMapper;

    public boolean createMainCategory(String title) {
        if (mainCategoryRepository.findByTitle(title).isPresent()) {
            throw new IllegalStateException("Main category already exists");
        }
        mainCategoryRepository.save(new MainCategory(title));
        return true;
    }

    public List<MainCategoryDto> getAllMainCategories() {
        List<MainCategory> mainCategories = mainCategoryRepository.findAll();
        List<MainCategoryDto> mainCategoryDto = mainCategoryMapper.toDtoList(mainCategories);

        for (int i = 0; i <mainCategories.size(); i++) {
            List<SubCategoryDto> subCategoriesDto = subCategoryMapper.toListDto(mainCategories.get(i).getSubCategories());
            mainCategoryDto.get(i).setSubCategories(subCategoriesDto);
        }
        return mainCategoryDto;
    }

    public MainCategoryDto getMainCategoriesById(String id) {
        MainCategory mainCategory = mainCategoryRepository.
                findById(new ObjectId(id)).orElseThrow(() ->
                        new IllegalStateException("The main category with id: " + id + " not found"));

        MainCategoryDto mainCategoryDto = mainCategoryMapper.toDto(mainCategory);

        mainCategoryDto.setSubCategories(subCategoryMapper.toListDto(mainCategory.getSubCategories()));

        return mainCategoryDto;
    }

    public MainCategoryDto getMainCategoriesByTitle(String title) {
        MainCategory mainCategory = mainCategoryRepository.
                findByTitle(title).orElseThrow(() ->
                        new IllegalStateException("The main category with id: " + title + " not found"));

        MainCategoryDto mainCategoryDto = mainCategoryMapper.toDto(mainCategory);

        mainCategoryDto.setSubCategories(subCategoryMapper.toListDto(mainCategory.getSubCategories()));

        return mainCategoryDto;
    }
}
