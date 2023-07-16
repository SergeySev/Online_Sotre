import { useSelector } from 'react-redux'
import s from './TabPickup.module.css'
import { useState } from 'react';

export function TabPickup() {
	const delivery_points = useSelector(store => store.order.delivery[1].addresses);

	const temp_date = new Date(Date.now() + (24 * 60 * 60 * 1000 * 3));
	const delivery_date = `${temp_date.getDate()} ${new Intl.DateTimeFormat('en-US', { month: 'long' }).format(temp_date)}`;

	return (
		<>
			<h3 className={s.tab_title}>Choose a delivery point</h3>

			<select name="address">
				{delivery_points.map((elem, index) => <option key={index} value={elem.index} >
					{elem}
				</option>)}
			</select>

			<p>Delivery free of charge to the point of issue</p>
			<p>
				The date of delivery to the point of issue is approximately
				<span>
					{` - ${delivery_date}`}
				</span>
			</p>
			<p>Order storage period 14 days</p>
		</>
	)
}
