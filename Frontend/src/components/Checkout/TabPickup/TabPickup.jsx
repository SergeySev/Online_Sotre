import { IoIosArrowDown } from 'react-icons/io';
import { addresses } from '../../../data/data';
import s from './TabPickup.module.css'

export function TabPickup() {

	const temp_date = new Date(Date.now() + (24 * 60 * 60 * 1000 * 3));
	const delivery_date = `${temp_date.getDate()} ${new Intl.DateTimeFormat('en-US', { month: 'long' }).format(temp_date)}`;

	return (
		<>
			<h3 className={s.tab_title}>Choose a delivery point</h3>

			<select
				className={s.select}
				name="address">
				{addresses.map((elem, index) => <option key={index} value={elem.index} >
					{elem}
				</option>)}
			</select>
			<IoIosArrowDown className={s.arrow} />

			<div className={s.pickup_content}>
				<p>Delivery free of charge to the point of issue</p>
				<p>
					The date of delivery to the point of issue is approximately -
					<span>
						{`${delivery_date}`}
					</span>
				</p>
				<p>Order storage period 14 days</p>
			</div>
		</>
	)
}
