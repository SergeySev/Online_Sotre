import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { delivery_data } from '../../../store/reducers/orderSlice';
import { Button } from '../../../UI';
import { TabCourier, TabPickup } from '../';
import s from './TabDelivery.module.css'

export function TabDelivery({ activeTab, setActiveTab }) {
	const [delivery_type, setDeliverytype] = useState('courier');

	const dispatch = useDispatch();

	const radioChange = (e) => {
		setDeliverytype(e.target.value)
	}

	const saveData = (event) => {
		event.preventDefault();
		const { delivery, city, post, street, house, app, date, shipping, address } = event.target;

		const obj = {
			title: delivery?.value,
			city: city?.value,
			post_code: post?.value,
			street: street?.value,
			house: house?.value,
			app: app?.value,
			date: date?.value,
			shipping: shipping?.value,
			address: address?.value,
		}

		console.log("🚀 ~ file: TabDelivery.jsx:25 ~ saveData ~ obj:", obj)

		if (activeTab < 3) {
			setActiveTab(++activeTab)
		}
		dispatch(delivery_data(obj));
	}

	return (
		<>
			<h2 className={s.delivery_title}>
				Choose the delivery option that suits you:
			</h2>
			<form className={s.checkout_form} onSubmit={saveData}>

				<ul className={s.radio_buttons}>
					<li className={`${s.radio_item} ${s[delivery_type === 'courier' ? 'active' : ''] || ''}`}>
						<label>
							<input
								type="radio"
								value="courier"
								name="delivery"
								checked={delivery_type === 'courier'}
								onChange={radioChange} />
							Courier delivery
						</label>
					</li>
					<li className={`${s.radio_item} ${s[delivery_type === 'pickup' ? 'active' : ''] || ''}`}>
						<label>
							<input
								type="radio"
								value="pickup"
								name="delivery"
								checked={delivery_type === 'pickup'}
								onChange={radioChange} />
							Pickup
						</label>
					</li>
				</ul>

				{delivery_type === "courier" ?
					<TabCourier /> :
					<TabPickup />}

				<Button
					text='next'
					content='checkout'
				/>
			</form>
		</>
	)
}
