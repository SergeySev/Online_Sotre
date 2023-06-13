import React from 'react'
import MainCategoriesAsideItem from '../MainCategoriesAsideItem/MainCategoriesAsideItem';
import s from './MainCategoriesAside.module.css'

export default function MainCategoriesAside({ categories }) {
  console.log(categories);
  return (
    <div className={s.aside_wrapper}>
      {categories.map((elem, index) =>
        <MainCategoriesAsideItem {...elem} key={index} />
      )}
    </div>
  )
}
