import React from 'react'
import s from './BrandList.module.css'

export default function BrandList({ brands }) {
  return (
    <div className={s.brand_list}>
      {brands.map((elem, index) => {
        return <div key={index} className={s.brand_item}>
          <img src={elem.brandImageLink} alt={elem.title} />
        </div>
      })}
    </div>
  )
}
