import { useContext } from 'react'
import { BurgerContext } from '../../context/burgerContext'
import s from './MenuIconsItem.module.css'

export function MenuIconsItem({ image, title, icon, count }) {
	const context = useContext(BurgerContext);
	return (
		<li
			className={`${s.menu_item} ${s[title === "phone" ? 'blocked' : ''] || ''}`}
			onClick={() => context.setBurgerActive(false)}>
			<div className={s.icon_wrapper}>
				{image ?
					<img src={image} alt={title} />
					: icon}
				{count ? <p className={s.counter}>{count}</p> : ""}
			</div>
		</li>
	)
}
