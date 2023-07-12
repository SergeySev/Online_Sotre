package com.example.fb_project.controller;

import com.example.fb_project.dto.SubCategoryDto;
import com.example.fb_project.service.SubCategoryService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/api/v1/sub_category")
@RequiredArgsConstructor
@CrossOrigin("*")
public class SubCategoryController {

    private final SubCategoryService subCategoryService;

    @Operation(summary = "Create a new Sub Categories")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successful loaded"),
            @ApiResponse(responseCode = "500", description = "If Sub categories has already been added"),
    })
    @PostMapping(path = "/add")
    public SubCategoryDto addNewSubCategory(@RequestBody SubCategoryDto subCategoryDto) {
        return subCategoryService.addSubCategory(subCategoryDto);
    }

    @Operation(summary = "Get all Sub Categories")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successful loaded"),
            @ApiResponse(responseCode = "500", description = "Sub categories don't exist in the Data base"),
    })
    @GetMapping(path = "/all")
    public List<SubCategoryDto> getAllSubCategory() {
        return subCategoryService.getAlLSubCategory();
    }


    @Operation(summary = "Get the Sub Category by Main Category Title")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successful loaded"),
            @ApiResponse(responseCode = "500", description = "If Sub Category not found " +
                    "or Main Category not found"),
    })
    @GetMapping(path = "/get_by_main/{title}")
    public List<SubCategoryDto> getSubCategoryByMainTitle(@PathVariable String title) {
        return subCategoryService.getAllSubCategoryByMainCategory(title);
    }

    @Operation(summary = "Get the Sub Category by id")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successful loaded"),
            @ApiResponse(responseCode = "500", description = "Sub Category not found"),
    })
    @GetMapping(path = "/get_by_id/{id}")
    public SubCategoryDto getSubCategoryById(@PathVariable String id) {
        return subCategoryService.getSubCategoryById(id);
    }

    @Operation(summary = "Get the Sub Category by title")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successful loaded"),
            @ApiResponse(responseCode = "500", description = "Sub Category not found"),
    })
    @GetMapping(path = "/get_by_title/{title}")
    public SubCategoryDto getSubCategoryByTitle(@PathVariable String title) {
        return subCategoryService.getSubCategoryByTitle(title);
    }

}
