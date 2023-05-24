import React from 'react'
import Slider from 'react-slick'
import s from './BrandSlider.module.css'
import { brands } from '../../data/data'
import BrandSliderItem from '../BrandSliderItem/BrandSliderItem'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function BrandSlider() {

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 1
  }

  return (
    <div className={s.brand_slider}>
      <div className='container'>
        <h2 className={s.slider_title}>Our Brands</h2>
        <Slider {...settings}>
          {brands.map(elem => <BrandSliderItem {...elem} key={elem.id} />)}
        </Slider>
      </div>
    </div>
  )
}
