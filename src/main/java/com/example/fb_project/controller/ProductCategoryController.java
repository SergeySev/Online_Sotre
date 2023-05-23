package com.example.fb_project.controller;

import com.example.fb_project.dto.ProductCategoryCreateDto;
import com.example.fb_project.service.ProductCategoryService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import lombok.RequiredArgsConstructor;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping(path = "/api/v1/product_category")
@RequiredArgsConstructor
@CrossOrigin("*")
public class ProductCategoryController {

    private final ProductCategoryService productCategoryService;

    /**
     * Upload an image for the Product Category.
     *
     * @param title of the product
     * @param file  the image file to upload
     * @return true If saving was successful
     * @throws IllegalStateException if the file is empty or is not an image
     */
    @Operation(summary = "Upload an image for the Product Category.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successful loaded"),
            @ApiResponse(responseCode = "500", description = "File is not an image or file is empty"),
    })
    @PostMapping(path = "/add/{title}",
            consumes = MediaType.MULTIPART_FORM_DATA_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public boolean addNewProductCategoryImage(@RequestParam MultipartFile file,
                                              @PathVariable String title) {
        return productCategoryService.addProductCategoryImage(file, title);
    }


    @Operation(summary = "Add a new Product Categories")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successful loaded"),
            @ApiResponse(responseCode = "500", description = "If Products categories has already been added " +
                    "or the Data is missing"),
    })
    @PostMapping(path = "/add_product")
    public ProductCategoryCreateDto addNewProductCategory(@RequestBody ProductCategoryCreateDto productCategoryCreateDto) {
        return productCategoryService.addProductCategory(productCategoryCreateDto);
    }

    @Operation(summary = "Get all Products Categories")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successful loaded"),
            @ApiResponse(responseCode = "500", description = "If Products categories has already been added " +
                    "or the Data is missing"),
    })
    @GetMapping(path = "/get_all")
    public List<ProductCategoryCreateDto> getAllProductCategory() {
        return productCategoryService.getAllProductCategory();
    }

    @Operation(summary = "Get the Image from Product Category by title")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successful loaded"),
            @ApiResponse(responseCode = "500", description = "If Product category doesn't have an image"),
    })
    @GetMapping(path = "/get_product_category_image")
    public ResponseEntity<InputStreamResource> getProductCategoryImage(@RequestParam String product_category_title) {
        return productCategoryService.getProductCategoryImage(product_category_title);
    }

    @Operation(summary = "Get the Product Category by Main Category Title")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successful loaded"),
            @ApiResponse(responseCode = "500", description = "If Product Category not found " +
                    "or Main Category not found"),
    })
    @GetMapping(path = "/get_product_category_by_main")
    public List<ProductCategoryCreateDto> getProductCategoryByMain(@RequestParam String mainTitle) {
        return productCategoryService.getAllProductCategoryByMainCategory(mainTitle);
    }

}
