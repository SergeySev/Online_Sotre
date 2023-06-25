import { useContext } from 'react'
import { BurgerContext } from '../../context/burgerContext'
import s from './MenuIconsItem.module.css'

export default function MenuIconsItem({ image, title, icon }) {
	const context = useContext(BurgerContext);

	return (
		<li
			className={`${s.menu_item} ${s[icon ? 'blocked' : ''] || ''}`}
			onClick={() => context.setBurgerActive(false)}>
			{image ? <img src={image} alt={title} /> : icon}
		</li>
	)
}
