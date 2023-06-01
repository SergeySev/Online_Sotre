import React, { useEffect } from 'react'
import s from './MainCategoriesPage.module.css'
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs'
import { useDispatch, useSelector } from 'react-redux'
import MainCategoryListContainer from '../../components/MainCategoryListContainer/MainCategoryListContainer'
import { fetch_main_categories } from '../../requests/requests'
import { NavLink } from 'react-router-dom'


export default function MainCategoriesPage() {

  const breadcrumbsItems = [
    { text: 'Home /', link: '/' },
    { text: 'Catalog', link: '/catalog' },
  ];

  const dispatch = useDispatch()
  const categories = useSelector(state => state.categories)
  const id = categories[0].id;


  useEffect(() => dispatch(fetch_main_categories()), [])

  const clickHandler = () => {

  }

  return (
    <div className={s.catalog_section}>
      <div className='container'>
        <Breadcrumbs items={breadcrumbsItems} />
        <div className={s.catalog_wrapper}>
          <h2 className={s.title}>Catalog</h2>
          <div className={s.catalog_headers}>
            {categories.map(elem =>
              <NavLink to={`/catalog/${elem.id}`}><div
                className={s.catalog_item_title}
                key={elem.title}>{elem.title}
              </div></NavLink>
            )}
          </div>
          <MainCategoryListContainer ident={id} />
        </div>
      </div>
    </div>


  )
}
