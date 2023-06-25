import { useContext } from 'react';
import { BurgerContext } from '../../context/burgerContext'
import s from './ContentMenu.module.css'
import { TopMenu, CatalogBurger, MainMenu, Search } from '../';


export function ContentMenu() {
	const context = useContext(BurgerContext);

	return (
		<div className={`${s.content_menu} ${s[context.burgerActive ? 'active' : ''] || ''}`}>
			<TopMenu isContent="content" />
			<Search isBlocked="content" />
			<CatalogBurger isBlocked="content" />
			<MainMenu isContent="content" />
		</div>
	)
}
