import React from 'react'
import s from './BrandSliderItem.module.css'

export default function BrandSliderItem({ image, title }) {
  return (
    <div>
      <img src={require('../BrandSlider/assets/' + image)} alt={title} className={s.slider_item} />
    </div>
  )
}
