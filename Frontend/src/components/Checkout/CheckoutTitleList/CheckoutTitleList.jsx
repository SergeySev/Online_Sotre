import { tabs } from '../../../data/data'
import s from './CheckoutTitleList.module.css'

export function CheckoutTitleList({ activeTab, setActiveTab }) {

	return (
		<ul className={s.title_list}>
			{tabs.map((elem) =>
				<li
					className={`${s.title_item} ${s[elem.id === activeTab ? 'active' : ''] || ''}`}
					key={elem.id}
					onClick={() => setActiveTab(elem.id)}
				>
					<p>{elem.title}</p>
				</li>)}
		</ul>
	)
}
