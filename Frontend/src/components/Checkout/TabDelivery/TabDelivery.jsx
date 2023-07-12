import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { CSSTransition } from 'react-transition-group';
import Calendar from 'react-calendar'
import { delivery_data } from '../../../store/reducers/orderSlice';
import 'react-calendar/dist/Calendar.css';
import { PopUp } from '../../';
import { Button } from '../../../UI';
import './calendar.css'
import s from './TabDelivery.module.css'

export function TabDelivery({ activeTab, setActiveTab }) {
	const delivery = { ...useSelector(store => store.order.delivery) }
	const { city, street, house, frame, app } = delivery[0]?.address;
	const { date, shipping } = { ...delivery[0] };

	const [delivery_date, setDeliveryDate] = useState(date)
	const [popup_active, setPopupActive] = useState(false)

	const nodeRef = useRef(null);
	const dispatch = useDispatch();

	const setCalendarValue = (date) => {
		const temp_date = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`
		setDeliveryDate(temp_date);
		setPopupActive(false);
	}

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
			date: date?.value,
			shipping: shipping?.value,
		}
		if (activeTab < 3) {
			setActiveTab(++activeTab)
		}
		dispatch(delivery_data(obj));
	}

	return (
		<>
			<form className={s.checkout_form} onSubmit={saveData}>
				<h2 className={s.delivery_title}>
					Choose the delivery option that suits you:
				</h2>
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
						<div>
							<label>
								appartment
								<input type="text" name="app" placeholder={app} />
							</label>
						</div>
					</li>

					<li className={`${s.data_item} ${s.data_item_date}`}>
						<div>
							<span>Next delivery date</span>
							<p>{delivery_date}</p>
						</div>
						<p className={s.calendar_link}
							onClick={() => setPopupActive(true)}>
							change
						</p>
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

			<CSSTransition
				in={popup_active}
				nodeRef={nodeRef}
				timeout={400}
				classNames="my-node"
				unmountOnExit>

				<PopUp
					ref={nodeRef}
					onClick={() => setPopupActive(false)}
					content={
						<button
							onClick={(e) => e.stopPropagation()}>
							<Calendar
								className={s.calendar}
								// value={delivery_date}
								onChange={(value) => setCalendarValue(value)}
							/>
						</button>
					}
				/>
			</CSSTransition >
		</>
	)
}
