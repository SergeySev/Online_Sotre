import { useParams } from 'react-router-dom';
import { Breadcrumbs } from '../../components';
import s from './BrandItemPage.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { get_brand_products } from '../../store/reducers/brandItemSlice';
import { fetch_brand_products } from '../../requests/requests';


export function BrandItemPage() {

	const brand = useParams();
	const brand_title = brand.brand
	const brand_products = useSelector(store => store.brand_item.brand_product_list)
	console.log(brand_products);

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
					<img src="" alt="" />
				</div>
				{/* <BrandList brands={brands} /> */}
			</div>
		</div>
	)
}
