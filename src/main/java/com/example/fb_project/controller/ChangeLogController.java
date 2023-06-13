package com.example.fb_project.controller;

import com.example.fb_project.service.ChangeLogService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "change_log")
@RequiredArgsConstructor
public class ChangeLogController {

    private final ChangeLogService changeLogService;

    @Operation(summary = "Check, if the app was started")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successful loaded"),
    })
    @GetMapping(path = "/is_started")
    public boolean isStart() {
        return changeLogService.isStart();
    }

    @Operation(summary = "Check, if the data base was updated")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successful loaded"),
    })
    @GetMapping(path = "/is_update")
    public boolean isUpdate() {
        return changeLogService.isUpdate();
    }

    @Operation(summary = "Upload the data base")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successful loaded"),
    })
    @PostMapping(path = "/update")
    public boolean update() {
        return changeLogService.addUpdate();
    }

    @Operation(summary = "Delete change log")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successful loaded"),
    })
    @DeleteMapping(path = "/delete")
    public boolean deleteChangeLog() {
        return changeLogService.deleteChangeLog();
    }
}
