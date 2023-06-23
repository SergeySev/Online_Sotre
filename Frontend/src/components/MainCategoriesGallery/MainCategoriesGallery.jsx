import React from 'react'
import CategoryItemGallery from '../CategoryItemGallery/CategoryItemGallery'
import s from './MainCategoriesGallery.module.css'

export default function MainCategoriesGallery({ categories }) {
  return (
    <div className={s.main_categories}>
      <div className='container'>
        <div className={s.categories_wrapper}>
          {categories.map(elem =>
            <CategoryItemGallery {...elem} key={elem.id} />
          )}
        </div>

      </div>
    </div>
  )
}