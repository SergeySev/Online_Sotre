
import { NavLink } from 'react-router-dom';
import burger from './assets/burger.png'
import s from './CatalogBurger.module.css'


export default function CatalogBurger({ isBlocked }) {
	return (
		<NavLink className={`${s.burger} ${s[isBlocked]}`} to='/catalog/' >
			<img src={burger} alt="burger icon" />
			<p className={s.burger_title}>Products catalog</p>
		</NavLink>
	)
}
