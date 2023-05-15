package com.example.fb_project.mapper;

import com.example.fb_project.dto.ClientDto;
import com.example.fb_project.entity.Clients;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-05-15T19:30:47+0200",
    comments = "version: 1.5.3.Final, compiler: javac, environment: Java 19 (Oracle Corporation)"
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

    @Override
    public List<ClientDto> listToDTO(List<Clients> clients) {
        if ( clients == null ) {
            return null;
        }

        List<ClientDto> list = new ArrayList<ClientDto>( clients.size() );
        for ( Clients clients1 : clients ) {
            list.add( toDto( clients1 ) );
        }

        return list;
    }
}
