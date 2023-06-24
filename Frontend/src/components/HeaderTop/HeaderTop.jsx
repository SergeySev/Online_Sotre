import Logo from '../Logo/Logo'
import WorkingHours from '../WorkingHours/WorkingHours';
import TopMenu from '../TopMenu/TopMenu';
import CartSum from '../CartSum/CartSum';
import CatalogBurger from '../CatalogBurger/CatalogBurger';
import Search from '../Search/Search';
import Burger from '../Burger/Burger';
import OrderCall from '../OrderCall/OrderCall';
import s from './HeaderTop.module.css'
import ContentMenu from '../ContentMenu/ContentMenu';

export default function HeaderTop() {

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
