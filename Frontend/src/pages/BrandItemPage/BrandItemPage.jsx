import { useParams } from 'react-router-dom';
import { Breadcrumbs, ProductsList } from '../../components';
import s from './BrandItemPage.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
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

	useEffect(() => {
		dispatch(fetch_brand_products(brand_title))
	}, [])

	return (
		<div className={s.brand_page}>
			<div className='container'>
				<Breadcrumbs items={breadcrumbsItems} className={s.breadcrumbs} />
				<h1 className={s.page_title}>{brand_title}</h1>
				<div className={s.brand_description}>
					<img src={brand_image} alt={brand_title} />
					<p>{brand_description}</p>
				</div>
				<h2 className={s.brand_subtitle}>{brand_title} products in our store</h2>
				<div className={s.products_wrapper}>
					<div className={s.products_list}>
						{/* <ProductsList products={brand_products} /> */}
					</div>
				</div>
			</div>
		</div>
	)
}
