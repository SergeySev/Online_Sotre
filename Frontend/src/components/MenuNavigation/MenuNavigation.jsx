import { useContext } from 'react'
import { HashLink } from 'react-router-hash-link'
import { BurgerContext } from '../../context/burgerContext'
import { menu_list } from '../../data/data'
import s from './MenuNavigation.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { toggle_offer } from '../../store/reducers/navSlice'

export function MenuNavigation({ isContent }) {
	const context = useContext(BurgerContext);

	const scrollWithOffset = (el) => {
		const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
		const yOffset = window.innerWidth <= 860 ? -60 : -96;
		window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
	}
	const dispatch = useDispatch();

	return (
		<ul className={`${s.main_menu_list} ${s[isContent] || ""}`}
			onClick={() => context.setBurgerActive(false)}>
			{menu_list.map(elem =>
				<HashLink
					className={s.main_menu_item}
					key={elem.id}
					smooth
					to={elem.link}
					onClick={() => dispatch(toggle_offer(elem.tag))}
					scroll={el => scrollWithOffset(el)}>
					{elem.title}
				</HashLink>)}
		</ul>
	)
}
