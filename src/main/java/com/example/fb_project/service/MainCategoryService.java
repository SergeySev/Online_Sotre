package com.example.fb_project.service;

import com.example.fb_project.dto.MainCategoryDto;
import com.example.fb_project.entity.MainCategory;
import com.example.fb_project.mapper.MainCategoryMapper;
import com.example.fb_project.repository.MainCategoryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class MainCategoryService {
    private final MainCategoryRepository mainCategoryRepository;
    private final MainCategoryMapper mainCategoryMapper;

    public boolean createMainCategory(String title) {
        if (title == null || title.isBlank()) throw new IllegalArgumentException("The title is null or is empty");
        if (mainCategoryRepository.findByTitle(title).isPresent()) {
            throw new IllegalStateException("Main category already exists");
        }
        mainCategoryRepository.save(new MainCategory(title));
        return true;
    }

    public List<MainCategoryDto> getAllMainCategories() {
        return mainCategoryMapper.toDtoList(mainCategoryRepository.findAll());
    }
}
