import React from 'react';
import s from './OffersSection.module.css';
import { offers_menu } from '../../data/data';
import ProductItem from '../ProductItem/ProductItem';
import Slider from 'react-slick';
import { novelties_list } from '../../data/data';
import './slick_styles.css'

export default function OffersSection() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1
  }

  return (
    <>
      <div className={s.offers_section}>
        <div className='container'>
          <div className={s.offers_section_inner}>
            {offers_menu.map(elem => <h2 className={elem.active ? s.offers_title_active : s.offers_title} key={elem.id}>{elem.title}</h2>)}
          </div>
        </div>

      </div>
      <div className={s.tab_inner}>
        <div className='container'>
          <div className={s.slider_inner}>
            <Slider {...settings}>
              {novelties_list.map(elem => <ProductItem {...elem} key={elem.id} />)}
            </Slider>
          </div>
        </div>

      </div>
    </>
  )
}
