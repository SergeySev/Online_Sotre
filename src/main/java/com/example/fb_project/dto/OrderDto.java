package com.example.fb_project.dto;


import lombok.*;

import java.math.BigDecimal;
import java.util.List;

@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class OrderDto {

    List<String> productsId;
    List<ProductDto> products;
    BigDecimal totalSum;
    String deliveryDate;
    String orderDate;

}
