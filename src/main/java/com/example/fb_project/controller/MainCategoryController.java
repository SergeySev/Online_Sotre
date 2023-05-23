package com.example.fb_project.controller;

import com.example.fb_project.dto.MainCategoryDto;
import com.example.fb_project.entity.MainCategory;
import com.example.fb_project.service.MainCategoryService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/api/v1/mainCategory")
@RequiredArgsConstructor
@CrossOrigin("*")
public class MainCategoryController {

    private final MainCategoryService mainCategoryService;

    @Operation(summary = "Upload a new Category")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successful loaded"),
            @ApiResponse(responseCode = "500", description = "If the Title is null or empty"),
    })
    @PostMapping(path = "/add")
    public boolean createMainCategory(@RequestParam String title) {
        return mainCategoryService.createMainCategory(title);
    }

    @Operation(summary = "Get all Main Category")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successful loaded"),
            @ApiResponse(responseCode = "500", description = "If categories don't exist in the Data Base"),
    })
    @GetMapping(path = "/getAllMainCategory")
    public List<MainCategoryDto> getMainCategory() {
        return mainCategoryService.getAllMainCategories();

    }

}
