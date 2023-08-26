import { useParams } from 'react-router-dom';
import { Breadcrumbs, BurgerAside, FilterAside, OffersAside, ProductsList } from '../../components';
import s from './BrandItemPage.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetch_brand_products } from '../../requests/requests';


export function BrandItemPage() {

	const brand = useParams();
	const brand_title = brand.brand
	const brand_products = useSelector(store => store.brand_item.brand_product_list)
	const brand_description = useSelector(store => store.brand_item.brand_description)
	const brand_image = useSelector(store => store.brand_item.brand_image)
	// console.log(brand_products);
	// console.log(brand_description);
	// console.log(brand_image);

	const breadcrumbsItems = [
		{ text: 'Home /', link: '/Online_Store' },
		{ text: 'Brands /', link: '/brands' },
		{ text: `${brand_title}`, link: `/${brand_title}` },
	];

	const dispatch = useDispatch()
	const [isAssideOpen, setIsAssideOpen] = useState(false);
	const subcategory_title = useSelector(store => store.category_products.category_title)
	const location = 'brand'


	useEffect(() => {
		dispatch(fetch_brand_products(brand_title))
	}, [])

	return (
		<div className={s.brand_page}>
			<div className='container'>
				<Breadcrumbs items={breadcrumbsItems} className={s.breadcrumbs} />
				<h1 className={s.page_title}>{brand_title}</h1>
				<div className={s.brand_description}>
					<div className={s.brand_image_wrapper}>
						<img src={brand_image} alt={brand_title} />
					</div>
					<p>{brand_description}</p>
				</div>
				<h2 className={s.brand_subtitle}>{brand_title} products in our store</h2>
				<div className={s.products_wrapper}>
					<aside className={s.aside_container}>
						<BurgerAside
							content='aside'
							isAssideOpen={isAssideOpen}
							setIsAssideOpen={setIsAssideOpen}
						/>
						<div className={`${s.aside_content} ${s[isAssideOpen ? "open" : ''] || ''}`}>
							<FilterAside subcategory_title={subcategory_title} brand={brand_title} />
							<OffersAside />
						</div>
					</aside>
					<div className={s.products_list}>
						<ProductsList products={brand_products} />
					</div>
				</div>
			</div>
		</div>
	)
}
