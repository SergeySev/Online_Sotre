package com.example.fb_project.controller;

import com.example.fb_project.dto.ProductDto;
import com.example.fb_project.service.ProductService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import lombok.RequiredArgsConstructor;
import org.bson.Document;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "api/v1/product")
@RequiredArgsConstructor
@CrossOrigin("*")
public class ProductController {

    private final ProductService productService;

    @Operation(summary = "Create a new Product")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successful loaded"),
            @ApiResponse(responseCode = "500", description = "The Product has already been added " +
                    "or some data is missing"),
    })
    @PostMapping(path = "/add_product")
    public ProductDto addNewProduct(@RequestBody ProductDto productDto) {
        return productService.addProduct(productDto);
    }

    @Operation(summary = "Get products by sub category title")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successful loaded"),
            @ApiResponse(responseCode = "500", description = "Sub Category or Products not found in the Data Base"),
    })
    @GetMapping(path = "/getProductsBySubCategory")
    public Page<ProductDto> getAllProductsByProductCategory(@RequestParam(defaultValue = "1") int page,
                                                            @RequestParam(defaultValue = "30") int size,
                                                            @RequestParam String productCategoryTitle) {
        Pageable pageable = PageRequest.of(page - 1, size);
        return productService.getAllProductsBySubCategory(pageable, productCategoryTitle);
    }

    @Operation(summary = "Get products by id")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successful loaded"),
            @ApiResponse(responseCode = "500", description = "Products not found in the Data Base"),
    })
    @GetMapping(path = "/getProductById")
    public ProductDto getProductById(@RequestParam String id) {
        return productService.getProductById(id);
    }

    @Operation(summary = "Get all Products")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successful loaded"),
            @ApiResponse(responseCode = "500", description = "Products not found in the Data Base"),
    })
    @GetMapping(path = "/all")
    public Page<ProductDto> getAllProducts(@RequestParam(defaultValue = "1") int page,
                                           @RequestParam(defaultValue = "30") int size) {
        Pageable pageable = PageRequest.of(page - 1, size);
        return productService.getAllProducts(pageable);
    }

    @Operation(summary = "Get all new Products")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successful loaded"),
            @ApiResponse(responseCode = "500", description = "Products not found in the Data Base"),
    })
    @GetMapping(path = "/novelties")
    public Page<ProductDto> getAllProductsByProductCategory(@RequestParam(defaultValue = "1") int page,
                                                            @RequestParam(defaultValue = "30") int size) {
        Pageable pageable = PageRequest.of(page - 1, size);
        return productService.getAllNovelties(pageable);
    }

    @Operation(summary = "Get all Products with discount price")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successful loaded"),
            @ApiResponse(responseCode = "500", description = "Products with discount price not found in the Data Base"),
    })
    @GetMapping(path = "/promo")
    public Page<ProductDto> getAllProductsWithoutDiscount(@RequestParam(defaultValue = "1") int page,
                                                          @RequestParam(defaultValue = "30") int size) {
        Pageable pageable = PageRequest.of(page - 1, size);
        return productService.getAllProductsWithoutDiscount(pageable);
    }

    @Operation(summary = "Get hit of Products")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successful loaded"),
            @ApiResponse(responseCode = "500", description = "Hit Products not found in the Data Base"),
    })
    @GetMapping(path = "/hit")
    public Page<ProductDto> getAllProductsHit(@RequestParam(defaultValue = "1") int page,
                                              @RequestParam(defaultValue = "30") int size) {
        Pageable pageable = PageRequest.of(page - 1, size);
        return productService.getAllProductsHit(pageable);
    }

    @Operation(summary = "Get products by brand title")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successful loaded"),
            @ApiResponse(responseCode = "500", description = "Brandor Products not found in the Data Base"),
    })
    @GetMapping(path = "/getProductsByBrand")
    public Page<ProductDto> getAllProductsByBrand(@RequestParam(defaultValue = "1") int page,
                                                  @RequestParam(defaultValue = "30") int size,
                                                  @RequestParam String brandTitle) {
        Pageable pageable = PageRequest.of(page - 1, size);
        return productService.getAllProductByBrand(pageable, brandTitle);
    }

    @Operation(summary = "Get products by filter with Sub Category")
    @ApiResponse(responseCode = "200", description = "Successful loaded")
    @GetMapping(path = "/byFilterWithSubCategory")
    public Document getAllProductsByFilterWithSubCategory(@RequestParam(defaultValue = "1") int page,
                                                          @RequestParam(defaultValue = "30") int size,
                                                          @RequestParam(defaultValue = "") String subCategoryId,
                                                          @RequestParam(defaultValue = "") String subCategoryTitle,
                                                          @RequestParam(defaultValue = "0") String priceFrom,
                                                          @RequestParam(defaultValue = "500") String priceTo,
                                                          @RequestParam(defaultValue = "") List<String> brandTitles,
                                                          @RequestParam(defaultValue = "") List<String> madeCountries,
                                                          @RequestParam(defaultValue = "") List<String> colours,
                                                          @RequestParam(defaultValue = "") List<String> deliveryTypes) {
        Pageable pageable = PageRequest.of(page - 1, size);
        return productService.getAllByFilterWithSubCategory(subCategoryId,
                subCategoryTitle,
                priceFrom,
                priceTo,
                brandTitles,
                madeCountries,
                colours,
                deliveryTypes,
                pageable
        );
    }

    @Operation(summary = "Get products by filter with Brand")
    @ApiResponse(responseCode = "200", description = "Successful loaded")
    @GetMapping(path = "/byFilterWithBrand")
    public Document getAllProductsByFilterWithBrand(@RequestParam(defaultValue = "1") int page,
                                                    @RequestParam(defaultValue = "30") int size,
                                                    @RequestParam(defaultValue = "") String brandTitle,
                                                    @RequestParam(defaultValue = "0") String priceFrom,
                                                    @RequestParam(defaultValue = "500") String priceTo,
                                                    @RequestParam(defaultValue = "") List<String> madeCountries,
                                                    @RequestParam(defaultValue = "") List<String> colours,
                                                    @RequestParam(defaultValue = "") List<String> deliveryTypes) {
        Pageable pageable = PageRequest.of(page - 1, size);
        return productService.getAllByFilterWithBrand(brandTitle,
                priceFrom,
                priceTo,
                madeCountries,
                colours,
                deliveryTypes,
                pageable
        );
    }


}
