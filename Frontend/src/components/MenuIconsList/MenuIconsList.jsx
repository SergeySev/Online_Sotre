import { top_menu_items } from '../../data/data'
import MenuIconsItem from '../MenuIconsItem/MenuIconsItem'
import s from './MenuIconsList.module.css'

export function MenuIconsList({ isContent }) {


	return (
		<ul className={`${s.top_menu} ${s[isContent] || ''}`}>
			{top_menu_items.map(elem =>
				<MenuIconsItem key={elem.id} {...elem} />)}
		</ul>
	)
}
