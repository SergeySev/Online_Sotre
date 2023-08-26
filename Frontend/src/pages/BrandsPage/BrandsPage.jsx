import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Breadcrumbs } from '../../components';
import BrandList from '../../components/BrandList/BrandList';
import { fetch_brands } from '../../requests/requests';
import s from './BrandsPage.module.css'

export function BrandsPage() {

	const dispatch = useDispatch()
	const brands = useSelector(store => store.brands)

	const breadcrumbsItems = [
		{ text: 'Home /', link: '/Online_Store' },
		{ text: 'Brands ', link: '/brands' },
	];

	useEffect(() => {
		dispatch(fetch_brands())
	}, [])

	return (
		<div className={s.brand_page}>
			<div className='container'>
				<Breadcrumbs items={breadcrumbsItems} className={s.breadcrumbs} />
				<h1 className={s.page_title}>Brands</h1>
				<BrandList brands={brands} />
			</div>
		</div>
	)
}
