package com.example.fb_project.service;

import com.example.fb_project.entity.Brand;
import com.example.fb_project.entity.Product;
import com.example.fb_project.entity.enums.Color;
import com.example.fb_project.entity.enums.DeliveryType;
import com.example.fb_project.entity.enums.MadeCountry;
import com.example.fb_project.repository.BrandRepository;
import com.example.fb_project.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.bson.Document;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.*;

@Service
@RequiredArgsConstructor
public class FilterService {

    private final BrandRepository brandRepository;

    private final ProductRepository productRepository;

    public Document getFilter() {
        List<DeliveryType> deliveryTypeList = List.of(DeliveryType.values());

        List<MadeCountry> madeCountryList = List.of(MadeCountry.values());

        List<Color> colorList = List.of(Color.values());

        List<Brand> brands = brandRepository.findAll();

        List<String> brandsTitles = new ArrayList<>();

        brands.forEach(brand -> brandsTitles.add(brand.getTitle()));

       Document document = new Document();

        List<Product> listProducts = productRepository.
                findOneMostExpensiveProduct(PageRequest.of(0, 1));

        if (listProducts.isEmpty()) throw new IllegalStateException("Products not found");

        BigDecimal maxPrice = listProducts.get(0).getPrice();


        document.put("maxPrice", maxPrice);
        document.put("Brands", brandsTitles);
        document.put("Made Country", madeCountryList);
        document.put("Color", colorList);
        document.put("Delivery Type", deliveryTypeList);

        return document;
    }
}
