package com.example.fb_project.service;

import com.example.fb_project.entity.BrandImage;
import com.example.fb_project.entity.ProductCategoryImage;
import com.example.fb_project.entity.ProductImage;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.InputStreamResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.multipart.MultipartFile;

import java.io.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Service
public class ImageService {

    public ResponseEntity<InputStreamResource> getInputStreamResourceResponseEntity(ProductCategoryImage image) {
        MediaType contentType = Objects.equals(image.getImageType(), "jpg") ?
                MediaType.IMAGE_JPEG : MediaType.IMAGE_PNG;
        InputStreamResource inputStreamResource = createImageResponse(
                image.getImage(),
                image.getImageType());

        return ResponseEntity.ok()
                .contentType(contentType)
                .body(inputStreamResource);
    }

    public ResponseEntity<InputStreamResource> getInputStreamResourceResponseEntity(BrandImage image) {
        MediaType contentType = Objects.equals(image.getImageType(), "jpg") ?
                MediaType.IMAGE_JPEG : MediaType.IMAGE_PNG;
        InputStreamResource inputStreamResource = createImageResponse(
                image.getImage(),
                image.getImageType());

        return ResponseEntity.ok()
                .contentType(contentType)
                .body(inputStreamResource);
    }

    public ResponseEntity<InputStreamResource> getInputStreamResourceResponseEntity(ProductImage image) {
        MediaType contentType = Objects.equals(image.getImageType(), "jpg") || Objects.equals(image.getImageType(), "jpeg")?
                MediaType.IMAGE_JPEG : MediaType.IMAGE_PNG;
        InputStreamResource inputStreamResource = createImageResponse(
                image.getImage(),
                image.getImageType());

        return ResponseEntity.ok()
                .contentType(contentType)
                .body(inputStreamResource);
    }



    public String getImageType(MultipartFile file) {
        return Objects.requireNonNull(file.getContentType()).
                substring(file.getContentType().indexOf("/") + 1);
    }

    byte[] fileCheckAndToByteArray(MultipartFile file) {
        if (file.isEmpty()) throw new IllegalStateException("File is empty");

        // 3. Check if ile is an image
        if (!(Objects.requireNonNull(file.getContentType()).endsWith("jpg")
                || file.getContentType().endsWith("png")
                || file.getContentType().endsWith("jpeg"))) throw new IllegalStateException("File is not image");
        return imageToByteArray(file);
    }

    public File byteImageToFile(byte[] image, String imageType) {
        File file;
        try {
            file = File.createTempFile("image", "." + imageType);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
        try (FileOutputStream fos = new FileOutputStream(file)) {
            fos.write(image);
        } catch (IOException e) {
            e.printStackTrace();
        }
        return file;
    }

    public InputStreamResource createImageResponse(byte[] imageInByte, String imageType) {
        File image = byteImageToFile(imageInByte, imageType);

        FileInputStream fileInputStream;
        try {
            fileInputStream = new FileInputStream(image);
            return new InputStreamResource(fileInputStream);
        } catch (FileNotFoundException e) {
            throw new RuntimeException(e);
        }
    }

    /**
     * Converts a MultipartFile object representing an image file into a byte array.
     *
     * @param file the MultipartFile object representing the image file
     * @return a byte array representing the image
     * @throws IllegalStateException if an exception occurs while converting the file into a byte array
     */
    byte[] imageToByteArray(MultipartFile file) {
        try {
            return file.getBytes();
        } catch (Exception e) {
            throw new IllegalStateException(e);
        }
    }
}
