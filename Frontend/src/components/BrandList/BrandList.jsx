import React from 'react'
import s from './BrandList.module.css'
import { NavLink } from 'react-router-dom'

export default function BrandList({ brands }) {
  return (
    <div className={s.brand_list}>
      {brands.map((elem, index) => {
        return <div key={index} className={s.brand_item}>
          <NavLink to={`/brands/${elem.title}`}><img src={elem.brandImageLink} alt={elem.title} /></NavLink>
        </div>
      })}
    </div>
  )
}
