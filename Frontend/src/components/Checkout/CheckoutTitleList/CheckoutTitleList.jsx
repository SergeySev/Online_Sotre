import { tabs } from '../../../data/data'
import s from './CheckoutTitleList.module.css'

export function CheckoutTitleList({ activeTab, setActiveTab, error }) {
	// console.log("🚀 ~ file: CheckoutTitleList.jsx:5 ~ CheckoutTitleList ~ activeTab:", activeTab)

	return (
		<ul className={s.title_list}>
			{tabs.map((elem) =>
				<li
					className={`${s.title_item} ${s[elem.id === activeTab ? 'active' : ''] || ''} ${s[elem.id < activeTab ? 'clicable' : ''] || ''}`}
					key={elem.id}
					onClick={elem.id <= activeTab ? () => setActiveTab(elem.id) : error}
				>
					<p>{elem.title}</p>
				</li>)}
		</ul>
	)
}
