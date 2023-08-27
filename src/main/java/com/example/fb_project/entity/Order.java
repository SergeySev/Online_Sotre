package com.example.fb_project.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

@ToString
@Getter
@Setter
@AllArgsConstructor
public class Order {

    List<String> productsId;
    List<Product> products;
    BigDecimal totalSum;
    String deliveryDate;
    String orderDate;

}
