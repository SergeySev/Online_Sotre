import React from 'react'
import Slider from 'react-slick'
import s from './BrandSlider.module.css'
// import { brands } from '../../data/data'
import BrandSliderItem from '../BrandSliderItem/BrandSliderItem'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from 'react-redux'

export default function BrandSlider() {

  const brands = useSelector(store => store.brands)

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1420,
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 690,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
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
