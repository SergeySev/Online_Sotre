import { ContentMenu, Logo, CatalogBurger, WorkingHours, OrderCall, TopMenu, CartSum, Burger } from '../../'
import s from './HeaderTop.module.css'

export function HeaderTop() {

	return (
		<div className={s.top_header}>
			<ContentMenu />
			<Logo content="header" />
			<CatalogBurger isBlocked="blocked" />
			<WorkingHours />
			<OrderCall isBlocked='blocked' />
			<TopMenu />
			<CartSum />
			<Burger />
		</div >
	)
}
