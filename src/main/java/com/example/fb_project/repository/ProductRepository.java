package com.example.fb_project.repository;

import com.example.fb_project.entity.Brand;
import com.example.fb_project.entity.Product;
import com.example.fb_project.entity.SubCategory;
import org.bson.types.ObjectId;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
@RepositoryRestResource(exported = false)
public interface ProductRepository extends MongoRepository<Product, ObjectId> {
    Optional<Product> findByTitle(String productTitle);

    Page<Product> findAllBySubCategoryId(Pageable pageable, ObjectId id);

    Page<Product> findAllByIsNew(Pageable pageable, boolean b);


    Page<Product> findAllByIsHit(Pageable pageable, boolean b);

    @Query("{'discountPrice' :  {'$ne': '0.00'}}")
    Page<Product> findAllWithNonZeroDiscountPrice(Pageable pageable);

    @Query(value = "{}", sort = "{ price: -1 }")
    List<Product> findOneMostExpensiveProduct(Pageable pageable);

    Optional<Product> findAnyBySubCategory(SubCategory subCategory);

    Page<Product> findAllByBrand(Pageable pageable, Brand brand);

    Page<Product> findByTitleContainingIgnoreCase(Pageable pageable, String title);
}
