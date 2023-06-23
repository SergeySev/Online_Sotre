import { useContext} from 'react';
import {BurgerContext} from '../../context/burgerContext'
import s from './ContentMenu.module.css'
import MainMenu from '../MainMenu/MainMenu';
import CatalogBurger from '../CatalogBurger/CatalogBurger';
import Search from '../Search/Search';
import TopMenu from '../TopMenu/TopMenu';

export default function ContentMenu() {
	const {burgerActive, setBurgerActive}  =  useContext(BurgerContext);

	return (
		<div  className={`${s.content_menu} ${s[burgerActive? 'active': ''] || ''}`}>
			<TopMenu isContent="content"/>
			<Search isBlocked="content"/>
			<CatalogBurger isBlocked="content"/>
			<MainMenu isContent="content"/>
		</div>
	)
}
