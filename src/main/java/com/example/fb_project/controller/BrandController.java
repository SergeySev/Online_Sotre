package com.example.fb_project.controller;

import com.example.fb_project.dto.BrandDto;
import com.example.fb_project.service.BrandService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "api/v1/brand")
@RequiredArgsConstructor
@CrossOrigin("*")
public class BrandController {

    private final BrandService brandService;

    @Operation(summary = "Create a new brand.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successful loaded"),
            @ApiResponse(responseCode = "500", description = "Some data is missing or Brand already exists"),
    })
    @PostMapping(path = "/add_brand")
    public BrandDto addNewBrand(@RequestBody BrandDto brandDto) {
        return brandService.addBrand(brandDto);
    }

    @Operation(summary = "Get all brands by Page")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successful loaded"),
            @ApiResponse(responseCode = "500", description = "Brands don't exist in the Data Base"),
    })
    @GetMapping(path = "/all")
    public Page<BrandDto> getBrand(@RequestParam(defaultValue = "1") int page,
                                   @RequestParam(defaultValue = "30") int size) {
        Pageable pageable = PageRequest.of(page -1, size);
        return brandService.getBrands(pageable);
    }

}
