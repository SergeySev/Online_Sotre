import React from 'react'
import s from './BrandSliderItem.module.css'

export default function BrandSliderItem({ brandImageLink, title }) {
  return (
    <div className={s.image_wrapper}>
      <img src={brandImageLink} alt={title} className={s.slider_item} />
    </div>
  )
}
