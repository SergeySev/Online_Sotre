import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import MainCategoriesAside from '../../components/MainCategoriesAside/MainCategoriesAside';
import ProductItem from '../../components/ProductItem/ProductItem';
import { get_category_products } from '../../requests/requests';

import s from './SubCategoryPage.module.css'

export default function SubCategoryPage() {

  const dispatch = useDispatch()

  let id = useParams();
  const categories = useSelector(store => store.categories)
  const category_products = useSelector(store => store.category_products)

  useEffect(() => dispatch(get_category_products(id.id)), [])

  console.log(id.id);

  const breadcrumbsItems = [
    { text: 'Home /', link: '/' },
    { text: 'Catalog', link: '/catalog' },
  ];

  return (
    <div className={s.subcategory_container}>
      <div className='container'>
        <Breadcrumbs items={breadcrumbsItems} />
        <div className={s.page_container}>
          <div className={s.aside_container}>
            <MainCategoriesAside categories={categories} category_products={category_products} />
          </div>
          <div className={s.products_list}>
            {category_products.map(elem => <ProductItem product={elem} />)}
          </div>
        </div>
      </div>


    </div>
  )
}
