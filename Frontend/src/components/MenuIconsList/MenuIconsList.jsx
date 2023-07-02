import { useSelector } from 'react-redux';
import { top_menu_items } from '../../data/data'
import { MenuIconsItem } from '../'
import s from './MenuIconsList.module.css'

export function MenuIconsList({ isContent }) {
	const cart_counter = useSelector(store => store.cart.total_amount);
	const favorite_counter = useSelector(store => store.favorite.total_amount)
	const comparison_counter = useSelector(store => store.comparison.total_amount);

	const counters = [null, favorite_counter, comparison_counter, null, cart_counter];

	return (
		<ul className={`${s.top_menu} ${s[isContent] || ''}`}>
			{top_menu_items.map((elem, index) =>
				<MenuIconsItem key={elem.id} {...elem} count={counters[index]} />)}
		</ul>
	)
}
