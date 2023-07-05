import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetch_sub_categories_by_main } from '../../requests/requests'
import { ProductsList } from '../'
import s from './MainCategoryListContainer.module.css'

export function MainCategoryListContainer({ ident }) {

	let { id } = useParams()
	id = id ? id : ident

	const dispatch = useDispatch()

	useEffect(() => {
		if (id) dispatch(fetch_sub_categories_by_main(id))
	}, [id])

	const subcategories = useSelector(store => store.subcategories)

	return (
		<ProductsList products={subcategories} content={id} pagination_content='subcategories' />
	)
}
