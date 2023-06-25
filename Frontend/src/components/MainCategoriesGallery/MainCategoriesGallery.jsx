import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetch_main_categories } from '../../requests/requests'
import CategoryItemGallery from '../CategoryItemGallery/CategoryItemGallery'
import s from './MainCategoriesGallery.module.css'

export function MainCategoriesGallery() {

	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(fetch_main_categories())
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