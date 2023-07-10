import { useSelector } from 'react-redux'
import s from './TabDelivery.module.css'
// import s from '../TabData/TabData.module.css'
import { Button } from '../../../UI';

export function TabDelivery({ activeTab, setActiveTab }) {
	const delivery = { ...useSelector(store => store.order.delivery) }
	const { city, street, house, frame, app } = delivery[0]?.address;
	const { date, shipping } = { ...delivery[0] };

	const saveData = (e) => {
		e.preventDefault();
		const { city, street, house, frame, app, date, shipping } = e.target
		const obj = {
			city: city?.value,
			street: street?.value,
			house: house?.value,
			frame: frame?.value,
			app: app?.value,
			date: date?.value,
			shipping: shipping?.value,
		}
		// console.log("🚀 ~ file: TabDelivery.jsx:21 ~ saveData ~ obj:", obj)
		if (activeTab < 3) {
			setActiveTab(++activeTab)
		}
		// dispatch(customer_data(userData));
	}

	return (
		<form className={s.checkout_form} onSubmit={saveData}>
			<h2 className={s.delivery_title}>Choose the delivery option that suits you:</h2>
			<ul className={s.data_list}>
				<li className={s.data_item}>
					<label>
						City
						<input type="text" name="city" placeholder={city} />
					</label>
				</li>
				<li className={s.data_item}>
					<label>
						Corp
						<input type="text" name="frame" placeholder={frame} />
					</label>
				</li>
				<li className={s.data_item}>
					<label>
						Street
						<input type="text" name="street" placeholder={street} />
					</label>
				</li>
				<li className={s.data_item}>
					<label>
						House
						<input type="text" name="house" placeholder={house} />
					</label>
					{/* </li>
				<li className={s.data_item}> */}
					<label>
						appartment
						<input type="text" name="app" placeholder={app} />
					</label>
				</li>
				<li className={s.data_item}>
					<label>
						Next delivery date
						<input type="date" name="date" placeholder={date} />
					</label>
				</li>street
				<li className={s.data_item}>
					<label>
						Delivery amount
						<input type="text" name="shipping" placeholder={shipping ? `${shipping} &#36;` : 'free'} />
					</label>
				</li>street
			</ul>
			<Button
				text='next'
				content='checkout'
			/>
		</form>
	)
}
