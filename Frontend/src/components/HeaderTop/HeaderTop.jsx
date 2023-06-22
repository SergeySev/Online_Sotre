import Logo from '../Logo/Logo'
import WorkingHours from '../WorkingHours/WorkingHours';
import TopMenu from '../TopMenu/TopMenu';
import CartSum from '../CartSum/CartSum';
import CatalogBurger from '../CatalogBurger/CatalogBurger';
import Search from '../Search/Search';
import Burger from '../Burger/Burger';
import OrderCall from '../OrderCall/OrderCall';
import s from './HeaderTop.module.css'

export default function HeaderTop() {
	return (
		<div className={s.top_header}>
			<Logo />
			<CatalogBurger isBlocked="blocked" />
			<Search isBlocked="blocked" />
			<WorkingHours />
			<OrderCall isBlocked='blocked' />
			<TopMenu />
			<CartSum />
			<Burger />
		</div >
	)
}
