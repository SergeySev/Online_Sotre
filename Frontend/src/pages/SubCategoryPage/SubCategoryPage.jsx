import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import MainCategoriesAside from '../../components/MainCategoriesAside/MainCategoriesAside';
import Pagination from '../../components/Pagination/Pagination';
import ProductItem from '../../components/ProductItem/ProductItem';
import { fetch_subcategory_products } from '../../requests/requests';
import s from './SubCategoryPage.module.css'

export function SubCategoryPage() {
	// export default function SubCategoryPage() {

	const dispatch = useDispatch()

	let id = useParams();
	const categories = useSelector(store => store.categories)
	const subcategory_products = useSelector(store => store.category_products.category_products)
	const subcategory_title = useSelector(store => store.category_products.category_title)

	useEffect(() => dispatch(fetch_subcategory_products(id.id)), [])

	const breadcrumbsItems = [
		{ text: 'Home /', link: '/' },
		{ text: 'Catalog /', link: '/catalog' },
		{ text: `${subcategory_title}`, link: '#' },
	];

	const [currentPage, setCurrentPage] = useState(1);
	const [countProductsPage, setCountProductsPage] = useState(20)

	const lastElem = currentPage * countProductsPage;
	const firstElem = lastElem - countProductsPage;
	const productsPageList = subcategory_products.slice(firstElem, lastElem)
	const countElem = Math.ceil(subcategory_products.length / countProductsPage)

	useEffect(() => {
		if (Math.ceil(subcategory_products.length / countProductsPage) < currentPage) {
			setCurrentPage(1)
		}
		window.scrollTo(0, 0);
	}, [subcategory_products, currentPage])

	const changeProductList = (id) => {
		dispatch(fetch_subcategory_products(id))
	}

	return (
		<div className={s.subcategory_container}>
			<div className='container'>
				<Breadcrumbs items={breadcrumbsItems} />
				<h2 className={s.subcategory_title}>{subcategory_title}</h2>
				<div className={s.page_container}>
					<div className={s.aside_container}>
						<MainCategoriesAside categories={categories} changeProductList={changeProductList} />
					</div>
					<div className={s.products_list_wrapper}>
						<div className={s.products_list}>
							{productsPageList.map(elem => <ProductItem product={elem} key={elem.id} />)}
						</div>
						<Pagination setCurrentPage={setCurrentPage} countElem={countElem} currentPage={currentPage} />
					</div>

				</div>
			</div>
		</div>
	)
}
