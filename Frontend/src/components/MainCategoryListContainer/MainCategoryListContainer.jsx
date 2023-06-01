import React from 'react'
import s from './MainCategoryListContainer.module.css'

export default function MainCategoryListContainer({ subcategories }) {

  const { id, title, imageLink } = subcategories;
  return (
    <div className={s.subcategories_list}>
      {subcategories.map(elem =>
        <div className={s.subcategory_item}>
          <img src={elem.imageLink} alt={elem.title} className={s.subcategory_img} />
          <p className={s.subcategory_title}>{elem.title}</p>
        </div>
      )}
    </div>
  )
}
