package com.example.fb_project.service;

import com.example.fb_project.dto.ProductDto;
import com.example.fb_project.entity.Brand;
import com.example.fb_project.entity.Characteristic;
import com.example.fb_project.entity.Product;
import com.example.fb_project.entity.SubCategory;
import com.example.fb_project.entity.enums.Color;
import com.example.fb_project.entity.enums.DeliveryType;
import com.example.fb_project.entity.enums.MadeCountry;
import com.example.fb_project.mapper.BrandMapper;
import com.example.fb_project.mapper.CharacteristicMapper;
import com.example.fb_project.mapper.ProductMapper;
import com.example.fb_project.repository.BrandRepository;
import com.example.fb_project.repository.CharacteristicRepository;
import com.example.fb_project.repository.ProductRepository;
import com.example.fb_project.repository.SubCategoryRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.bson.Document;
import org.bson.types.ObjectId;
import org.hibernate.query.IllegalQueryOperationException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ProductService {

    private final ProductRepository productRepository;

    private final ProductMapper productMapper;

    private final BrandRepository brandRepository;

    private final SubCategoryRepository subCategoryRepository;

    private final CharacteristicRepository characteristicRepository;

    private final CharacteristicMapper characteristicMapper;

    private final BrandMapper brandMapper;

    private final MongoTemplate mongoTemplate;

    @Transactional
    public ProductDto addProduct(ProductDto productDto) {
        boolean isProductExist = productRepository.findByTitle(productDto.getTitle()).isPresent();
        if (isProductExist) {
            throw new IllegalStateException("Product already exist");
        }
        Brand brand = brandRepository.
                findByTitle(productDto.getBrand()).
                orElseThrow(() -> new IllegalQueryOperationException("Brand not found"));


        SubCategory subCategory = subCategoryRepository.
                findByTitle(productDto.getSubCategoryTitle()).
                orElseThrow(() -> new IllegalQueryOperationException("Sub category not found"));

        Characteristic characteristic = new Characteristic();
        characteristic.setType(productDto.getCharacteristicDto().getType());
        characteristic.setAssignment(productDto.getCharacteristicDto().getAssignment());
        characteristic.setTypeOfWork(productDto.getCharacteristicDto().getTypeOfWork());
        characteristic.setBasis(productDto.getCharacteristicDto().getBasis());
        characteristic.setGlossGrade(productDto.getCharacteristicDto().getGlossGrade());
        characteristic.setWeight(productDto.getCharacteristicDto().getWeight());


        Product product = new Product(productDto.getTitle(),
                productDto.getPrice(),
                productDto.getDiscountPrice(),
                productDto.getDescription(),
                productDto.getIsNew(),
                DeliveryType.valueOf(productDto.getDeliveryType().toUpperCase()),
                Color.valueOf(productDto.getColour().toUpperCase()),
                subCategory,
                brand,
                productDto.getMainImageLink(),
                productDto.getIsHit(),
                productDto.getInStock(),
                MadeCountry.valueOf(productDto.getMadeCountry().toUpperCase()),
                characteristic);

        product.getProductImagesLinks().add(productDto.getMainImageLink());
        List<String> imagesFromDto = productDto.getProductImagesLinks();

        for (String image : imagesFromDto) {
            product.getProductImagesLinks().add(image);
        }

        brand.getProducts().add(product);
        subCategory.getProducts().add(product);

        characteristicRepository.save(characteristic);
        productRepository.save(product);
        brandRepository.save(brand);
        subCategoryRepository.save(subCategory);

        return productMapper.toDto(product);
    }

    public ProductDto getProductById(String id) {
        Product product = productRepository.
                findById(new ObjectId(id)).
                orElseThrow(() -> new IllegalArgumentException("Product with id: " + id + " not found"));
        ProductDto productDto = productMapper.toDto(product);

        Characteristic characteristic = product.getCharacteristic();
        productDto.setCharacteristicDto(characteristicMapper.toDto(characteristic));
        return productDto;
    }

    public Page<ProductDto> getAllProductsBySubCategory(Pageable pageable, String productCategoryTitle) {
        SubCategory subCategory = subCategoryRepository.
                findByTitle(productCategoryTitle).
                orElseThrow(() -> new IllegalQueryOperationException("Sub category not found"));

        Page<Product> products = productRepository.findAllBySubCategoryId(pageable, subCategory.getId());
        if (products.isEmpty()) throw new IllegalQueryOperationException("Product not found");
        return products.map(productMapper::toDto);
    }

    public Page<ProductDto> getAllProducts(Pageable pageable) {
        Page<Product> products = productRepository.findAll(pageable);
        if (products.isEmpty()) throw new IllegalQueryOperationException("Product not found");
        return products.map(productMapper::toDto);
    }

    public Page<ProductDto> getAllNovelties(Pageable pageable) {
        Page<Product> products = productRepository.findAllByIsNew(pageable, true);
        if (products.isEmpty()) throw new IllegalQueryOperationException("Product not found");
        return products.map(productMapper::toDto);
    }

    public Page<ProductDto> getAllProductsWithoutDiscount(Pageable pageable) {
        Page<Product> products = productRepository.findAllWithNonZeroDiscountPrice(pageable);
        if (products.isEmpty()) throw new IllegalQueryOperationException("Product with discount price not found");
        return products.map(productMapper::toDto);
    }

    public Page<ProductDto> getAllProductsHit(Pageable pageable) {
        Page<Product> products = productRepository.findAllByIsHit(pageable, true);
        if (products.isEmpty()) throw new IllegalQueryOperationException("Product not found");
        return products.map(productMapper::toDto);
    }

    public Page<ProductDto> getAllProductByBrand(Pageable pageable, String brandTitle) {
        Brand brand = brandRepository.
                findByTitle(brandTitle).
                orElseThrow(() -> new IllegalArgumentException("Brand with title " + brandTitle + " not found"));
        Page<Product> products = productRepository.findAllByBrand(pageable, brand);

        if (products.isEmpty()) {
            throw new IllegalArgumentException("Product with brand title " + brandTitle + " not found");
        }
        return products.map(productMapper::toDto);
    }

    public Document getAllByFilterWithSubCategory(String subCategoryId,
                                                  String subCategoryTitle,
                                                  String priceFrom,
                                                  String priceTo,
                                                  List<String> brandTitle,
                                                  List<String> madeCountries,
                                                  List<String> colours,
                                                  List<String> deliveryTypes,
                                                  Pageable pageable
    ) {
        Criteria criteria = new Criteria();

        Integer priceFromInInteger = Integer.valueOf(priceFrom);
        Integer priceToInInteger = Integer.valueOf(priceTo);

        SubCategory subCategory;
        if (!subCategoryId.isEmpty()) {
            subCategory = subCategoryRepository.
                    findById(new ObjectId(subCategoryId)).
                    orElseThrow(() ->
                            new IllegalArgumentException("The Sub Category with ID: " + subCategoryId + " not found"));
        } else {
            subCategory = subCategoryRepository.
                    findByTitle(subCategoryTitle).
                    orElseThrow(() ->
                            new IllegalArgumentException("The Sub Category with sub category title: " +
                                    subCategoryTitle + " not found"));
        }
        criteria.and("subCategory").in(subCategory);

        if (!priceFrom.isEmpty() && !priceTo.isEmpty()) {
            criteria.and("price").gte(priceFromInInteger).lte(priceToInInteger);
        }

        if (!brandTitle.isEmpty()) {
            List<Brand> brands = brandRepository.findByTitleIn(brandTitle);

            criteria.and("brand").in(brands);
        }

        if (!madeCountries.isEmpty()) {
            criteria.and("madeCountry").in(madeCountries.stream().map(String::toUpperCase).collect(Collectors.toList()));
        }

        if (!colours.isEmpty()) {
            criteria.and("colour").in(colours.stream().map(String::toUpperCase).collect(Collectors.toList()));
        }

        if (!deliveryTypes.isEmpty()) {
            criteria.and("deliveryType").in(deliveryTypes.stream().map(String::toUpperCase).collect(Collectors.toList()));
        }

        Query totalCountQuery = Query.query(criteria);
        long totalElement = mongoTemplate.count(totalCountQuery, Product.class);

        Query query = Query.query(criteria).with(pageable);

        int totalPages = (int) Math.ceil((double) totalElement / pageable.getPageSize());

        List<Product> products = mongoTemplate.find(query, Product.class);

        List<ProductDto> productsDto = products.stream().map(productMapper::toDto).toList();

        Document document = new Document();

        int page = pageable.getPageNumber() + 1;

        document.put("content", productsDto);
        document.put("totalPages", totalPages);
        document.put("totalElement", totalElement);
        document.put("elementOnPage", productsDto.size());
        document.put("pageNumber", page);
        document.put("lastPage", totalPages == page);
        document.put("firstPage", page == 1);

        return document;
    }

    public Document getAllByFilterWithBrand(String brandTitle,
                                            String priceFrom,
                                            String priceTo,
                                            List<String> madeCountries,
                                            List<String> colours,
                                            List<String> deliveryTypes,
                                            Pageable pageable
    ) {
        Criteria criteria = new Criteria();

        Brand brand = brandRepository.
                findByTitle(brandTitle).
                orElseThrow(() -> new IllegalArgumentException("Brand not found"));

        criteria.and("brand").in(brand);

        Integer priceFromInInteger = Integer.valueOf(priceFrom);
        Integer priceToInInteger = Integer.valueOf(priceTo);


        if (!priceFrom.isEmpty() && !priceTo.isEmpty()) {
            criteria.and("price").gte(priceFromInInteger).lte(priceToInInteger);
        }

        if (!madeCountries.isEmpty()) {
            criteria.and("madeCountry").in(madeCountries.stream().map(String::toUpperCase).collect(Collectors.toList()));
        }

        if (!colours.isEmpty()) {
            criteria.and("colour").in(colours.stream().map(String::toUpperCase).collect(Collectors.toList()));
        }

        if (!deliveryTypes.isEmpty()) {
            criteria.and("deliveryType").in(deliveryTypes.stream().map(String::toUpperCase).collect(Collectors.toList()));
        }

        Query totalCountQuery = Query.query(criteria);
        long totalElement = mongoTemplate.count(totalCountQuery, Product.class);

        Query query = Query.query(criteria).with(pageable);

        int totalPages = (int) Math.ceil((double) totalElement / pageable.getPageSize());

        List<Product> products = mongoTemplate.find(query, Product.class);

        List<ProductDto> productsDto = products.stream().map(productMapper::toDto).toList();

        Document document = new Document();

        int page = pageable.getPageNumber() + 1;

        document.put("brand", brandMapper.toDto(brand));
        document.put("content", productsDto);
        document.put("totalPages", totalPages);
        document.put("totalElement", totalElement);
        document.put("elementOnPage", productsDto.size());
        document.put("pageNumber", page);
        document.put("lastPage", totalPages == page);
        document.put("firstPage", page == 1);

        return document;
    }

    public Page<ProductDto> getAllProductByTitle(Pageable pageable, String title) {
        Page<Product> products = productRepository.findByTitleContainingIgnoreCase(pageable, title);

        if (products.isEmpty()) {
            throw new IllegalArgumentException("The products with title: " + title + " not found");
        }
        return products.map(productMapper::toDto);
    }

}
