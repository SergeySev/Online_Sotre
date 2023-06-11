import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import s from './CategoryItemGallery.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { fetch_sub_categories_by_main } from '../../requests/requests';
import ProductItem from '../ProductItem/ProductItem';

export default function CategoryItemGallery({ id, title }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1
  }

  const dispatch = useDispatch();
  const sub_categories = useSelector(store => store.subcategories)

  useEffect(() => {
    dispatch(fetch_sub_categories_by_main(id))
  }, [id])

  return (
    <>
      <div className={s.category_header}>
        <h2>{title}</h2>
        <div className={s.category_controls}>
          <Slider {...settings}>
            {sub_categories.map(elem => <ProductItem product={elem.productDtoList[0]} key={elem.id} />)}
          </Slider>
        </div>
      </div>
    </>

  )
}
