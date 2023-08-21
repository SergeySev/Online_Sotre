package com.example.fb_project.controller;

import com.example.fb_project.dto.ClientDto;
import com.example.fb_project.dto.ClientRegisterDto;
import com.example.fb_project.dto.ClientUpdateDto;
import com.example.fb_project.service.ClientService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "api/v1/client")
@RequiredArgsConstructor
@CrossOrigin("*")
public class ClientController {

    private final ClientService clientService;

    /**
     * Registers a new client.
     *
     * @param client The client registration data as a {@link ClientRegisterDto} object.
     * @return The registered client information as a {@link ClientDto} object.
     * @throws IllegalStateException if any of the following conditions occur:
     *                               <p>- One of the fields is empty
     *                               <p>- The client has already been added
     *                               <p>- The email is not valid
     * @apiNote This endpoint expects a POST request to the "/registration" path.
     * @apiParam {ClientRegisterDto} client The client registration data in JSON format.
     * @apiSuccessExample Successful response:
     * <p>HTTP/1.1 200 OK
     * <p>{
     * <p>"firstName": "Name",
     * <p>"lastName": "LastName",
     * <p>"email": "email@gmail.com",
     * <p>"phoneNumber": "+4912398723",
     * <p>"birthDate": "1993-02-16T00:00:00.000Z"
     * <p>}
     * @apiErrorExample Error response:
     * <p>HTTP/1.1 500 Internal Server Error
     * <p>"message":
     * <p>- One of the field is empty
     * <p>- The Client has already been added
     * <p>- Email is not valid"
     */
    @Operation(summary = "Register a new Client")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successful registered."),
            @ApiResponse(responseCode = "500", description = "Some data is missing, " +
                    "or the client has already been added" +
                    "or Email is not valid"),
    })
    @PostMapping(path = ("/registration"))
    public ClientDto registrationNewClient(@RequestBody ClientRegisterDto client) {
        return clientService.registerClient(client);
    }


    @Operation(summary = "Get all Client by Page")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successful loaded"),
            @ApiResponse(responseCode = "500", description = "If clients don't exist in the Data Base"),
    })
    @GetMapping(path = "/get_clients")
    public Page<ClientDto> getClients(@RequestParam(defaultValue = "1") int page,
                                      @RequestParam(defaultValue = "30") int size) {
        Pageable pageable = PageRequest.of(page - 1, size);
        return clientService.getClientsByPage(pageable);
    }

    @Operation(summary = "Get Client")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successful loaded"),
            @ApiResponse(responseCode = "500", description = "If client doesn't exist in the Data Base"),
    })
    @PostMapping(path = "/get_client")
    public ClientDto getClient(@RequestParam String password,
                               @RequestParam String email) {
        return clientService.getClient(password, email);
    }

    @Operation(summary = "Update Client")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successful loaded"),
            @ApiResponse(responseCode = "500", description = "If client doesn't exist in the Data Base"),
    })
    @PutMapping (path = "/update_client")
    public ClientDto updateClient(@RequestBody ClientUpdateDto clientUpdateDto) {
        return clientService.updateClient(clientUpdateDto);
    }

    @Operation(summary = "Add purchase")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successful loaded"),
            @ApiResponse(responseCode = "500", description = "If client doesn't exist in the Data Base"),
    })
    @PutMapping (path = "/add_purchase")
    public ClientDto updateClient(@RequestParam String productId, String clientId) {
        return clientService.addPurchase(productId, clientId);
    }
}
