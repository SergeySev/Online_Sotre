package com.example.fb_project.mapper;

import com.example.fb_project.dto.ClientDto;
import com.example.fb_project.entity.Clients;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-05-21T00:04:23+0200",
    comments = "version: 1.5.3.Final, compiler: javac, environment: Java 17.0.2 (Eclipse Adoptium)"
)
@Component
public class ClientMapperDtoImpl implements ClientMapperDto {

    @Override
    public ClientDto toDto(Clients client) {
        if ( client == null ) {
            return null;
        }

        ClientDto clientDto = new ClientDto();

        clientDto.setFirstName( client.getFirstName() );
        clientDto.setLastName( client.getLastName() );
        clientDto.setPhoneNumber( client.getPhoneNumber() );
        clientDto.setEmail( client.getEmail() );
        clientDto.setBirthDate( client.getBirthDate() );

        return clientDto;
    }
}
