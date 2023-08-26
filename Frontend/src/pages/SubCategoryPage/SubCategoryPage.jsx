import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetch_main_categories, fetch_subcategory_products } from '../../requests/requests';
import { Breadcrumbs, MainCategoriesAside, FilterAside, ProductsList, OffersAside, BurgerAside } from '../../components';
import s from './SubCategoryPage.module.css'

export function SubCategoryPage() {

	const [isAsideOpen, setIsAsideOpen] = useState(false);

	const dispatch = useDispatch()

	let id = useParams();
	const categories = useSelector(store => store.categories)
	const subcategory_products = useSelector(store => store.category_products.category_products)
	const subcategory_title = useSelector(store => store.category_products.category_title)

	useEffect(() => {
		dispatch(fetch_subcategory_products(id.id))
		dispatch(fetch_main_categories())
	}, [])

	const breadcrumbsItems = [
		{ text: 'Home /', link: '/Online_Store' },
		{ text: 'Catalog /', link: '/catalog' },
		{ text: `${subcategory_title}`, link: '#' }
	];

	const changeProductList = (id) => {
		dispatch(fetch_subcategory_products(id))
	}

	return (
		<section className={`${s.subcategory_section} ${s[isAsideOpen ? "open" : ''] || ''}`}>
			<div className='container'>
				<Breadcrumbs items={breadcrumbsItems} />
				<h1 className='title'>{subcategory_title}</h1>
				<div className={s.page_container}>
					<aside className={s.aside_container}>
						<BurgerAside
							content='aside'
							isAsideOpen={isAsideOpen}
							setIsAsideOpen={setIsAsideOpen}
						/>
						<div className={`${s.aside_content} ${s[isAsideOpen ? "open" : ''] || ''}`}>
							<MainCategoriesAside categories={categories} changeProductList={changeProductList} />
							<FilterAside subcategory_title={subcategory_title} />
							<OffersAside />
						</div>
					</aside>
					<div className={s.products_list_wrapper}>
						<ProductsList products={subcategory_products} />
					</div>
				</div>
			</div>
		</section>
	)
}
