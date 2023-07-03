import { useContext } from 'react'
import { BurgerContext } from '../../context/burgerContext'
import s from './MenuIconsItem.module.css'
import { NavLink } from 'react-router-dom';

export function MenuIconsItem({ image, title, icon, count, link }) {
	const context = useContext(BurgerContext);
	return (
		<li
			className={`${s.menu_item} ${s[title === "phone" ? 'blocked' : ''] || ''}`}
			onClick={() => context.setBurgerActive(false)}>
			<NavLink
				className={s.item_link}
				to={link}>
				<div className={s.icon_wrapper}>
					{image ?
						<img src={image} alt={title} />
						: icon}
					{count ? <p className={s.counter}>{count}</p> : ""}
				</div>
			</NavLink>
		</li>
	)
}
