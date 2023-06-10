package com.example.fb_project.controller;

import com.example.fb_project.dto.MainCategoryDto;
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

    @Operation(summary = "Create a new Category")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successful loaded"),
            @ApiResponse(responseCode = "500", description = "Main category already exists"),
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
    @GetMapping(path = "/all")
    public List<MainCategoryDto> getAllMainCategory() {
        return mainCategoryService.getAllMainCategories();
    }

    @Operation(summary = "Get Main Category by id")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successful loaded"),
            @ApiResponse(responseCode = "500", description = "If categories don't exist in the Data Base"),
    })
    @GetMapping(path = "/byId/{id}")
    public MainCategoryDto getMainCategoryById(@PathVariable String id) {
        return mainCategoryService.getMainCategoriesById(id);
    }

    @Operation(summary = "Get Main Category by title")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successful loaded"),
            @ApiResponse(responseCode = "500", description = "If categories don't exist in the Data Base"),
    })
    @GetMapping(path = "/byTitle/{title}")
    public MainCategoryDto getMainCategoryByTitle(@PathVariable String title) {
        return mainCategoryService.getMainCategoriesByTitle(title);
    }

    @Operation(summary = "Get Main Category by id With all products from this category")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successful loaded"),
            @ApiResponse(responseCode = "500", description = "If categories don't exist in the Data Base"),
    })
    @GetMapping(path = "/byIdWithProducts/{id}")
    public MainCategoryDto getMainCategoryByIdWithProducts(@PathVariable String id) {
        return mainCategoryService.getMainCategoriesByIdWithProducts(id);
    }

}
