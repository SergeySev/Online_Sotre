import { HashLink } from 'react-router-hash-link'
import { menu_list } from '../../data/data'
import s from './MainMenu.module.css'

export default function MainMenu() {

	const scrollWithOffset = (el) => {
		const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
		const yOffset = -96;
		window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
	}
	return (
		<ul className={s.main_menu_list}>
			{menu_list.map(elem =>
				<HashLink
					className={s.main_menu_item}
					key={elem.id}
					smooth
					to={elem.link}
					scroll={el => scrollWithOffset(el)}>
					{elem.title}
				</HashLink>)}
		</ul>
	)
}
