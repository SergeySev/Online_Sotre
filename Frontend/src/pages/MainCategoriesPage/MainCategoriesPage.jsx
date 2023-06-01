import React, { useEffect } from 'react'
import s from './MainCategoriesPage.module.css'
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs'
import { useDispatch, useSelector } from 'react-redux'
import MainCategoryListContainer from '../../components/MainCategoryListContainer/MainCategoryListContainer'
import { fetch_main_categories, fetch_sub_categories_by_main } from '../../requests/requests'


export default function MainCategoriesPage() {

  const breadcrumbsItems = [
    { text: 'Home /', link: '/' },
    { text: 'Catalog', link: '/catalog' },
  ];

  const dispatch = useDispatch()
  const categories = useSelector(state => state.categories)
  const id = categories[0].id;


  useEffect(() => dispatch(fetch_main_categories()), [])
  useEffect(() => dispatch(fetch_sub_categories_by_main(id)), [])

  const subcategories = useSelector(store => store.subcategories)
  console.log(subcategories)

  return (
    <div className={s.catalog_section}>
      <div className='container'>
        <Breadcrumbs items={breadcrumbsItems} />
        <div className={s.catalog_wrapper}>
          <h2 className={s.title}>Catalog</h2>
          <div className={s.catalog_headers}>
            {categories.map(elem => <div
              className={s.catalog_item_title}
              key={elem.title}>{elem.title}
            </div>)}
          </div>
          <MainCategoryListContainer subcategories={subcategories} />
        </div>
      </div>
    </div>


  )
}
