import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useParams } from 'react-router-dom'
import { fetch_sub_categories_by_main } from '../../requests/requests'
import s from './MainCategoryListContainer.module.css'

export default function MainCategoryListContainer({ ident }) {

	let { id } = useParams()

	id = id ? id : ident

	const dispatch = useDispatch()
	useEffect(() => dispatch(fetch_sub_categories_by_main(id)), [id])

	const subcategories = useSelector(store => store.subcategories)
	// console.log(subcategories);

	return (
		<div className={s.subcategories_list}>
			{subcategories.map(elem =>
				<div className={s.subcategory_item} key={elem.id}>
					<img src={elem.imageLink} alt={elem.title} className={s.subcategory_img} />
					{/* <p className={s.subcategory_title}>{elem.title}</p> */}
					{<NavLink to={`/catalog/${id}/${elem.id}`}><p className={s.subcategory_title}>{elem.title}</p></NavLink>}
				</div>
			)}
		</div>
	)
}
