
import { NavLink } from 'react-router-dom';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import burger from './assets/burger.png'
import s from './CatalogBurger.module.css'


export default function CatalogBurger() {
	return (
		<NavLink className={s.burger} to='/catalog/' >
			<img src={burger} alt="burger icon" />
			<p className={s.burger_title}>Products catalog</p>
		</NavLink>
	)
}
