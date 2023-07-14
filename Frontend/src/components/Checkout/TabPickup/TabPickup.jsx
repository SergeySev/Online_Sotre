import { useSelector } from 'react-redux'
import s from './TabPickup.module.css'

export function TabPickup({ addressInput }) {
	const delivery = { ...useSelector(store => store.order.delivery) }
	const { date } = { ...delivery[1] };
	// console.log("🚀 ~ file: TabPickup.jsx:7 ~ TabPickup ~ date:", date)

	const delivery_points = useSelector(store => store.order.delivery[1].addresses)
	return (
		<>
			<h3 className={s.tab_title}>Choose a delivery point</h3>

			<select {...addressInput}>
				{delivery_points.map((elem, index) => <option key={index} value={elem.index} >
					{elem}
				</option>)}
			</select>

			<p>Delivery free of charge to the point of issue</p>
			<p>
				The date of delivery to the point of issue is approximately
				<span>
					{` ${date}`}
				</span>
			</p>
			<p>Order storage period 14 days</p>
		</>


	)
}
