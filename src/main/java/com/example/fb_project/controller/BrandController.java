package com.example.fb_project.controller;

import com.example.fb_project.dto.BrandCreateDto;
import com.example.fb_project.service.BrandService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.InputStreamResource;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping(path = "api/v1/brand")
@RequiredArgsConstructor
@CrossOrigin("*")
public class BrandController {

    @Autowired
    private final BrandService brandService;

    /**
     * Uploads a new brand image.
     *
     * @param title of the brand
     * @param file  the image file to upload
     * @return true If saving was successful
     * @throws IllegalStateException if the file is empty or is not an image
     */
    @Operation(summary = "Upload an image for brand by brand title.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successful loaded"),
            @ApiResponse(responseCode = "500", description = "File is not an image or file is empty"),
    })
    @PostMapping(path = "/add_image/{title}",
            consumes = MediaType.MULTIPART_FORM_DATA_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public boolean addNewBrandImage(@RequestParam MultipartFile file,
                                    @PathVariable String title) {
        return brandService.addBrandImage(file, title);
    }

    @Operation(summary = "Create a new brand.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successful loaded"),
            @ApiResponse(responseCode = "500", description = "Some data is missing or Brand already exists"),
    })
    @PostMapping(path = "/add_brand")
    public BrandCreateDto addNewBrand(@RequestBody BrandCreateDto brandCreateDto) {
        return brandService.addBrand(brandCreateDto);
    }

    @Operation(summary = "Get an image File by Brand Title")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successful loaded"),
            @ApiResponse(responseCode = "500", description = "If brand doesn't exist or doesn't have an image"),
    })
    @GetMapping(path = "/getBrandImage")
    public ResponseEntity<InputStreamResource> getBrandImage(@RequestParam String brandTitle) {
        return brandService.getBrandImage(brandTitle);
    }

    @Operation(summary = "Get brands by Page")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successful loaded"),
            @ApiResponse(responseCode = "500", description = "Brands don't exist in the Data Base"),
    })
    @GetMapping(path = "/getBrands")
    public Page<BrandCreateDto> getBrand(@RequestParam(defaultValue = "0") int page,
                                   @RequestParam(defaultValue = "30") int size) {
        Pageable pageable = PageRequest.of(page, size);
        return brandService.getBrand(pageable);
    }

}
