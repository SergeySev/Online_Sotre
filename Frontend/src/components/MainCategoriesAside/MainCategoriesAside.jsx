import React from 'react'
import s from './MainCategoriesAside.module.css'

export default function MainCategoriesAside({ categories }) {
  return (
    <div className={s.aside_wrapper}>
      {categories.map((elem, index) =>
        <div className={s.category_item} key={index}>{elem.title}</div>
      )}
    </div>
  )
}
