package com.example.fb_project.mapper;

import com.example.fb_project.dto.MainCategoryDto;
import com.example.fb_project.entity.MainCategory;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-05-21T00:04:23+0200",
    comments = "version: 1.5.3.Final, compiler: javac, environment: Java 17.0.2 (Eclipse Adoptium)"
)
@Component
public class MainCategoryMapperImpl implements MainCategoryMapper {

    @Override
    public List<MainCategoryDto> toDtoList(List<MainCategory> mainCategories) {
        if ( mainCategories == null ) {
            return null;
        }

        List<MainCategoryDto> list = new ArrayList<MainCategoryDto>( mainCategories.size() );
        for ( MainCategory mainCategory : mainCategories ) {
            list.add( mainCategoryToMainCategoryDto( mainCategory ) );
        }

        return list;
    }

    protected MainCategoryDto mainCategoryToMainCategoryDto(MainCategory mainCategory) {
        if ( mainCategory == null ) {
            return null;
        }

        String title = null;

        title = mainCategory.getTitle();

        MainCategoryDto mainCategoryDto = new MainCategoryDto( title );

        return mainCategoryDto;
    }
}
