import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { fetch_main_categories } from '../../requests/requests'
import { Breadcrumbs, MainCategoryListContainer } from '../../components'
import s from './MainCategoriesPage.module.css'

export function MainCategoriesPage() {

	const dispatch = useDispatch()
	const categories = useSelector(state => state.categories)
	const id = categories[0]?.id;

	const breadcrumbsItems = [
		{ text: 'Home /', link: '/Online_Store' },
		{ text: 'Catalog', link: '/catalog' },
	];

	useEffect(() => dispatch(fetch_main_categories()), [])

	return (
		<div className={s.catalog_section}>
			<div className='container'>
				<Breadcrumbs items={breadcrumbsItems} />
				<div className={s.catalog_wrapper}>
					<h1 className='title'>Catalog</h1>
					<div className={s.catalog_headers}>
						{categories.map(elem =>
							<NavLink to={`/catalog/${elem.id}`} key={elem.title}><div
								className={s.catalog_item_title}
							>{elem.title}
							</div></NavLink>
						)}
					</div>
					<MainCategoryListContainer ident={id} />
				</div>
			</div>
		</div>
	)
}
