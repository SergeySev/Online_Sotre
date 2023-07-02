import { useSelector } from 'react-redux';
import { Breadcrumbs } from '../../components';
import s from './FavoriteProductsPage.module.css'

export function FavoriteProductsPage() {
	const breadcrumbsItems = [
		{ text: 'Home /', link: '/' },
		{ text: 'Favorites', link: '/favorite' },
	];

	const total_amount = useSelector(store => store.favorite.total_amount)

	return (
		<div>
			<div className="container">
				<Breadcrumbs items={breadcrumbsItems} />
				<h2>Favorites</h2>
				<div className={s.favorite_top}>
					<div className={s.total}>
						<p className={s.items_count}>{total_amount}</p>
						<p>goods</p>
					</div>
					<label>
						sort:
						<select>
							<option>new first</option>
							<option>discount first</option>
							<option>ascending price</option>
							<option>descending price</option>
						</select>
					</label>
				</div>
			</div>
		</div>
	)
}
