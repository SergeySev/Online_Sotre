import { useSelector } from 'react-redux';
import { Breadcrumbs, Pagination, ProductsList, SortSelect } from '../../components';
import s from './FavoriteProductsPage.module.css'

export function FavoriteProductsPage() {
	const breadcrumbsItems = [
		{ text: 'Home /', link: '/' },
		{ text: 'Favorites', link: '/favorite' },
	];

	const total_amount = useSelector(store => store.favorite.total_amount)
	const products_list = useSelector(store => store.favorite.favorite_list)

	return (
		<section className={s.favorite_page}>
			<div className="container">
				<Breadcrumbs items={breadcrumbsItems} />
				<h1 className='title'>Favorites</h1>
				<div className={s.favorite_top}>
					<div className={s.total}>
						<p className={s.items_count}>{total_amount}</p>
						<p>goods</p>
					</div>
					<SortSelect content='favorite' />
				</div>
				<ProductsList products={products_list} />
			</div>
		</section >
	)
}
