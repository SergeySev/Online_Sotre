import { MenuBurger, Logo, CatalogBurger, WorkingHours, OrderCall, MenuIconsList, CartSum, Burger } from '../../'
import s from './HeaderTop.module.css'

export function HeaderTop() {

	return (
		<div className={s.top_header}>
			<MenuBurger />
			<Logo content="header" />
			<CatalogBurger isBlocked="blocked" />
			<WorkingHours />
			<OrderCall isBlocked='blocked' />
			<MenuIconsList />
			<CartSum />
			<Burger />
		</div >
	)
}
