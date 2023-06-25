import React, { useEffect } from 'react'
import CategoryItemGallery from '../CategoryItemGallery/CategoryItemGallery'
import s from './MainCategoriesGallery.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { fetch_brands, fetch_main_categories } from '../../requests/requests'

// export default function MainCategoriesGallery({ categories }) {
export default function MainCategoriesGallery() {

	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(fetch_main_categories())
		// dispatch(fetch_brands())
	}, [])

	const categories = useSelector(store => store.categories)

	return (
		<section className={s.main_categories}>
			<div className='container'>
				<ul className={s.categories_wrapper}>
					{categories.map(elem =>
						<CategoryItemGallery {...elem} key={elem.id} />
					)}
				</ul>

			</div>
		</section>
	)
}