package com.example.fb_project.controller;

import com.example.fb_project.service.FilterService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping(path = "/api/v1/filter")
@RequiredArgsConstructor
@CrossOrigin("*")
public class FilterController {

    private final FilterService filterService;

    @Operation(summary = "Get list for filter settings")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "Successful loaded"),
            @ApiResponse(responseCode = "500", description = "The products not found in the Data Base")
    })
    @GetMapping(path = "/get")
    public Map<String, List<?>> getFilter() {
        return filterService.getFilter();
    }

}
