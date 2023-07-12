package com.example.fb_project.controller;

import com.example.fb_project.dto.OfferDto;
import com.example.fb_project.service.OffersService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "api/v1/offers")
@CrossOrigin("*")
@RequiredArgsConstructor
public class OfferController {

    private final OffersService offerService;

    @Operation(summary = "Create a new Offer")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successful loaded"),
            @ApiResponse(responseCode = "500", description = "Offer already exists"),
    })
    @PostMapping(path = "/add")
    public boolean createOffer(@RequestBody OfferDto offerDto) {
        return offerService.addOffer(offerDto);
    }

    @Operation(summary = "Get all Offers")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successful loaded"),
            @ApiResponse(responseCode = "500", description = "If offers don't exist in the Data Base"),
    })
    @GetMapping(path = "/all")
    public List<OfferDto> getAllOffers() {
        return offerService.getAllOffers();
    }
}
