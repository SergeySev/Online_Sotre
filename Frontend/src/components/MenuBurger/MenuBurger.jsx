import { useContext } from 'react';
import { BurgerContext } from '../../context/burgerContext'
import { MenuIconsList, CatalogBurger, MenuNavigation, Search } from '..';
import s from './MenuBurger.module.css'


export function MenuBurger() {
	const context = useContext(BurgerContext);

	return (
		<div className={`${s.content_menu} ${s[context.burgerActive ? 'active' : ''] || ''}`}>
			<MenuIconsList isContent="content" />
			<Search isBlocked="content" />
			<CatalogBurger isBlocked="content" />
			<MenuNavigation isContent="content" />
		</div>
	)
}
