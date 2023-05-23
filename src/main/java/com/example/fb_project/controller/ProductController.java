package com.example.fb_project.controller;

import com.example.fb_project.dto.ProductDto;
import com.example.fb_project.service.ProductService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import lombok.RequiredArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.core.io.InputStreamResource;
import org.springframework.core.io.Resource;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping(path = "api/v1/product")
@RequiredArgsConstructor
@CrossOrigin("*")
public class ProductController {

    private final ProductService productService;

    /**
     * Uploads a new brand image.
     *
     * @param title of the brand
     * @param file  the image file to upload
     * @return true If saving was successful
     * @throws IllegalStateException if the file is empty or is not an image
     */
    @Operation(summary = "Upload an Image to the Product")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successful loaded"),
            @ApiResponse(responseCode = "500", description = "File is not an image, " +
                    "or file is empty, " +
                    "or  product not found"),
    })
    @PostMapping(path = "/add_image/{title}",
            consumes = MediaType.MULTIPART_FORM_DATA_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public boolean addNewProductImage(@RequestParam MultipartFile file,
                                      @PathVariable String title) {
        return productService.addProductImage(file, title);
    }

    /**
     * Uploads a new brand image.
     *
     * @param title of the brand
     * @param file  the image file to upload
     * @return true If saving was successful
     * @throws IllegalStateException if the file is empty or is not an image
     */
    @Operation(summary = "Upload a Main Image (witch will be on the front Page) to the Product")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successful loaded"),
            @ApiResponse(responseCode = "500", description = "File is not an image, " +
                    "or file is empty, " +
                    "or  product not found " +
                    "or Main Image has already been added"),
    })
    @PostMapping(path = "/add_main_image/{title}",
            consumes = MediaType.MULTIPART_FORM_DATA_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public boolean addMainProductImage(@RequestParam MultipartFile file,
                                       @PathVariable String title) {
        return productService.addMainProductImage(file, title);
    }

    @Operation(summary = "Add a new Product")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successful loaded"),
            @ApiResponse(responseCode = "500", description = "The Product has already been added " +
                    "or some data is missing"),
    })
    @PostMapping(path = "/add_product")
    public ProductDto addNewProduct(@RequestBody ProductDto productDto) {
        return productService.addProduct(productDto);
    }

    @Operation(summary = "Get the Main Image from Product")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successful loaded"),
            @ApiResponse(responseCode = "500", description = "The Product doesn't have Main Image " +
                    "or product doesn't exist in the Data Base"),
    })
    @GetMapping(path = "/getMainProductImage")
    public ResponseEntity<InputStreamResource> getMainProductImage(@RequestParam String productTitle) {
        return productService.getMainProductImage(productTitle);
    }

    @Operation(summary = "Get the List of the Product Images ID. Use this Endpoint " +
            "for get the List with all Images Id " +
            "for load all images from Product one by one by Id in another Endpoint")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successful loaded"),
            @ApiResponse(responseCode = "500", description = "The Product doesn't have Images"),
    })
    @GetMapping(path = "/getAllProductImagesId")
    public List<String> getProductImageById(@RequestParam ObjectId id) {
        return productService.getAllProductImagesId(id);
    }

    @Operation(summary = "Get the Image of Product By Image Id")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successful loaded"),
            @ApiResponse(responseCode = "500", description = "Image with this ID doesn't exist in the Data Base"),
    })
    @GetMapping(path = "/getProductImageById")
    public ResponseEntity<InputStreamResource> getProductImage(@RequestParam ObjectId id) {
        return productService.getProductImage(id);
    }

    @Operation(summary = "Get Products by Product Category Title by Page")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successful loaded"),
            @ApiResponse(responseCode = "500", description = "Product Category or Products not found in the Data Base"),
    })
    @GetMapping(path = "/getProducts")
    public Page<ProductDto> getBrand(@RequestParam(defaultValue = "0") int page,
                                     @RequestParam(defaultValue = "30") int size,
                                     @RequestParam String productCategoryTitle) {
        Pageable pageable = PageRequest.of(page, size);
        return productService.getAllProductsByProductCategory(pageable, productCategoryTitle);
    }


}
