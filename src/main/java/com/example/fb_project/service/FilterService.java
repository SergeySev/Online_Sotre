package com.example.fb_project.service;

import com.example.fb_project.entity.Brand;
import com.example.fb_project.entity.Product;
import com.example.fb_project.entity.enums.Color;
import com.example.fb_project.entity.enums.DeliveryType;
import com.example.fb_project.entity.enums.MadeCountry;
import com.example.fb_project.mapper.BrandMapper;
import com.example.fb_project.repository.BrandRepository;
import com.example.fb_project.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class FilterService {

    private final BrandRepository brandRepository;

    private final BrandMapper brandMapper;

    private final ProductRepository productRepository;

    public Map<String, List<?>> getFilter() {
        List<DeliveryType> deliveryTypeList = List.of(DeliveryType.values());
        List<MadeCountry> madeCountryList = List.of(MadeCountry.values());
        List<Color> colorList = List.of(Color.values());

        Product productMinPrice = productRepository.findFirstByOrderByPriceAsc().
                orElseThrow(() ->
                        new IllegalStateException("The products not found in the Data Base"));
        Product productMaxPrice = productRepository.findFirstByOrderByPriceDesc().
                orElseThrow(
                        () -> new IllegalStateException("The products not found in the Data Base"));

        List<BigDecimal> price = new ArrayList<>();
        price.add(productMinPrice.getPrice());
        price.add(productMaxPrice.getPrice());


        List<Brand> brands = brandRepository.findAll();
        List<String> brandsTitles = new ArrayList<>();

        brands.forEach(brand -> brandsTitles.add(brand.getTitle()));


        Map<String, List<?>> map = new HashMap<>();
        map.put("Brands", brandsTitles);
        map.put("Made Country", madeCountryList);
        map.put("Color", colorList);
        map.put("Delivery Type", deliveryTypeList);
        map.put("Price", price);

        return map;
    }
}
