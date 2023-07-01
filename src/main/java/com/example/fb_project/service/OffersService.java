package com.example.fb_project.service;

import com.example.fb_project.dto.OfferDto;
import com.example.fb_project.entity.Offer;
import com.example.fb_project.mapper.OfferMapper;
import com.example.fb_project.repository.OffersRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class OffersService {

    private final OffersRepository offersRepository;

    private final OfferMapper offerMapper;

    public List<OfferDto> getAllOffers() {
        List<OfferDto> offerDtoList = offerMapper.toDtoList(offersRepository.findAll());
        if (offerDtoList.isEmpty()) throw new IllegalStateException("The offers not found in the data base");
        return offerDtoList;
    }

    public boolean addOffer(OfferDto offerDto) {
        boolean offer = offersRepository.
                findByTitle(offerDto.getTitle()).isPresent();

        if (offer) throw new IllegalArgumentException("The offer already exist in the data base");

        Offer newOffer = new Offer();
        newOffer.setTitle(offerDto.getTitle());
        newOffer.setDescription(offerDto.getDescription());
        newOffer.setImageLink(offerDto.getImageLink());

        offersRepository.save(newOffer);
        return true;
    }
}
