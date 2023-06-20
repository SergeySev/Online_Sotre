import { top_menu_items } from '../../data/data'
import TopMenuItem from '../TopMenuItem/TopMenuItem'
import s from './TopMenu.module.css'

export default function TopMenu() {

	return (
		<ul className={s.top_menu}>
			{top_menu_items.map(elem =>
				<TopMenuItem key={elem.id} {...elem} />)}
		</ul>
	)
}
