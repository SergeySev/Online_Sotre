import { useState } from 'react';
import { useSelector } from 'react-redux';
import { courier_inputs } from '../../../data/data';
import { CalendarCustom, PopUpContainer, useAuth } from '../../';
import { InputOrder } from '../../../UI';
import s from './TabCourier.module.css'

export function TabCourier() {

	const isAuth = useAuth();
	const delivery = { ...useSelector(store => store.order.delivery) }
	const { date, shipping } = { ...delivery[0] };
	const { city, street, house, post_code, app } = delivery[0]?.address;
	const [popup_active, setPopupActive] = useState(false);

	const [values, setValues] = useState({
		city: city ? city : isAuth.city,
		post_code: post_code ? post_code : isAuth.postcode,
		street: street ? street : isAuth.street,
		house: house ? house : isAuth.house,
		app: app ? app : isAuth.appartment,
		date: date ? date : printDayFromMillisec(Date.now()),
		shipping: shipping ? +shipping : "free",
	});

	const setCalendarValue = (date) => {
		const day_format = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`
		setPopupActive(false);
		setValues({ ...values, date: day_format, shipping: setDeliveryShipping(date.getTime()) })
	}

	const onChange = (e) => {
		setValues({ ...values, [e.target.name]: e.target.value });
	};

	const setDeliveryShipping = (delivery_date) => {
		const sec_now = Date.now();
		return (delivery_date - sec_now < 1000 * 60 * 60 * 24 * 3) ? 50 : 30
	}

	function printDayFromMillisec(millisec) {
		const date_local = new Date(millisec);
		return `${date_local.getDate()}.${date_local.getMonth() + 1}.${date_local.getFullYear()}`;
	}

	return (
		<>
			<h3 className={s.tab_title}>Enter shipping address</h3>
			<ul className={s.data_list}>
				{courier_inputs.map(input =>
					<InputOrder
						key={input.id}
						{...input}
						content='courier'
						value={values[input.name]}
						onChange={onChange}
						setPopupActive={setPopupActive}
					/>)}
			</ul>

			<PopUpContainer
				popup_active={popup_active}
				setPopupActive={setPopupActive}
				content={<CalendarCustom setCalendarValue={setCalendarValue} />}
			/>
		</>
	)
}
