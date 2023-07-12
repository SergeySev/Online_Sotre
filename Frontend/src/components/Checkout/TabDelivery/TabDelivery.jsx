import { useDispatch, useSelector } from 'react-redux'
import { delivery_data } from '../../../store/reducers/orderSlice';
import { Button } from '../../../UI';
import s from './TabDelivery.module.css'
import { useRef, useState } from 'react';

export function TabDelivery({ activeTab, setActiveTab }) {
	const delivery = { ...useSelector(store => store.order.delivery) }
	const { city, street, house, frame, app } = delivery[0]?.address;
	const { date, shipping } = { ...delivery[0] };
	const temp_date = new Date(date + (24 * 60 * 60 * 1000))
	const delivery_date = `${temp_date.getDate()}/${temp_date.getMonth() + 1}/${temp_date.getFullYear()}`

	const dispatch = useDispatch();
	const refDate = useRef()

	const saveData = (e) => {
		e.preventDefault();
		const { city, street, house, frame, app, date, shipping } = e.target
		const obj = {
			title: 'courier',
			city: city?.value,
			street: street?.value,
			house: house?.value,
			frame: frame?.value,
			app: app?.value,
			date: date?.value || Date.now(),
			shipping: shipping?.value,
		}
		if (activeTab < 3) {
			setActiveTab(++activeTab)
		}
		dispatch(delivery_data(obj));
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
				<li className={`${s.data_item} ${s.data_item_house}`}>
					<div>

						<label>
							House
							<input type="text" name="house" placeholder={house} />
						</label>
					</div>
					{/* </li>
				<li className={s.data_item}> */}
					<div>
						<label>
							appartment
							<input type="text" name="app" placeholder={app} />
						</label>
					</div>
				</li>
				<li className={`${s.data_item} ${s.data_item_date}`}>
					<div>
						<p>Next delivery date</p>
						<p>{delivery_date}</p>
					</div>
					<label >
						change
						<input
							ref={refDate}
							type="date"
							name="date" />
					</label>
				</li>
				<li className={s.data_item}>
					<label>
						Delivery amount
						<input type="text" name="shipping" placeholder={shipping ? `${shipping} &#36;` : 'free'} />
					</label>
				</li>
			</ul>
			<Button
				text='next'
				content='checkout'
			/>
		</form>
	)
}
