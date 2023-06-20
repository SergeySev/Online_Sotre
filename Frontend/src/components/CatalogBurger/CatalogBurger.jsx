
import { NavLink } from 'react-router-dom';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import burger from './assets/burger.png'
import s from './CatalogBurger.module.css'


export default function CatalogBurger() {
	return (
		<NavLink to='/catalog/' >
			<div className={s.burger}>
				{/* <HiOutlineMenuAlt2 className={s.burger_icon} /> */}
				<img src={burger} alt="burger icon" />
				<p className={s.burger_title}>Products catalog</p>
			</div>
		</NavLink>
	)
}
