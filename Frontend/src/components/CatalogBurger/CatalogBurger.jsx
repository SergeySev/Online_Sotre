import { useContext } from 'react'
import { BurgerContext } from '../../context/burgerContext'
import { NavLink } from 'react-router-dom';
import burger from './assets/burger.png'
import s from './CatalogBurger.module.css'


export function CatalogBurger({ isBlocked }) {

	const context = useContext(BurgerContext);

	return (
		<NavLink
			className={`${s.burger} ${s[isBlocked]}`}
			to='/catalog/'
			onClick={() => context.setBurgerActive(false)}>
			<img src={burger} alt="burger icon" />
			<p className={s.burger_title}>Products catalog</p>
		</NavLink>
	)
}
