import { useEffect, useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { useDispatch, useSelector } from 'react-redux';
import { PopUp, CalendarCustom } from '../../';
import s from './TabCourier.module.css'

export function TabCourier({
	errors,
	cityInput,
	postInput,
	streetInput,
	houseInput,
	appartmentInput,
	dateInput,
	amountInput }) {

	const delivery = { ...useSelector(store => store.order.delivery) }
	const { date, shipping } = { ...delivery[0] };
	console.log("🚀 ~ file: TabCourier.jsx:19 ~ shipping:", shipping)
	const { city, street, house, post_code, app } = delivery[0]?.address;

	const nodeRef = useRef(null);

	const [popup_active, setPopupActive] = useState(false);

	const [delivery_date, setDeliveryDate] = useState(printDayFromMillisec(date));
	const [delivery_shipping, setDeliveryShipping] = useState(shipping);
	// console.log("🚀 ~ file: TabCourier.jsx:25 ~ delivery_date:", delivery_date)

	function printDayFromMillisec(millisec) {
		const date_local = new Date(millisec);
		return `${date_local.getDate()}.${date_local.getMonth() + 1}.${date_local.getFullYear()}`;
	}

	const setCalendarValue = (date) => {
		const day_format = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`
		setPopupActive(false);
		setDeliveryDate(day_format);
	}

	useEffect(() => {
		const date_string = delivery_date;
		const date_parts = date_string.split('.');
		const day = parseInt(date_parts[0], 10);
		const month = parseInt(date_parts[1], 10);
		const year = parseInt(date_parts[2], 10);
		const date_given = new Date(year, month - 1, day);
		const sec_given = date_given.getTime();
		const sec_now = Date.now();
		// console.log("sec_given - sec_now: ", sec_given - sec_now);
		// console.log(1000 * 60 * 60 * 24 * 3);
		if (sec_given - sec_now < 1000 * 60 * 60 * 24 * 3) {
			// console.log("less then 3");
			setDeliveryShipping(50)
		} else {
			// console.log("more then 3");
			setDeliveryShipping(30)
		}

	}, [delivery_date])

	return (
		<>
			<h3 className={s.tab_title}>Enter shipping address</h3>

			<ul className={s.data_list}>
				<li className={`${s.data_item} ${s[errors.city && 'error_style']}`}>
					<label>
						City
						<input {...cityInput} type="text" name="city" placeholder={city} />
					</label>
				</li>
				<li className={s.data_item}>
					<label>
						Post code
						<input {...postInput} type="text" name="post" placeholder={post_code} />
					</label>
				</li>
				<li className={s.data_item}>
					<label>
						Street
						<input {...streetInput} type="text" name="street" placeholder={street} />
					</label>
				</li>

				<li className={`${s.data_item} ${s.data_item_house}`}>
					<div>
						<label>
							House
							<input {...houseInput} type="text" name="house" placeholder={house} />
						</label>
					</div>
					<div>
						<label>
							appartment
							<input {...appartmentInput} type="text" name="app" placeholder={app} />
						</label>
					</div>
				</li>

				<li className={`${s.data_item} ${s.data_item_date}`}>
					<div>
						<span>Next delivery date</span>
						<p>{delivery_date}</p>
						<input {...dateInput} type='date' name='date' value={delivery_date} />
					</div>
					<p className={s.calendar_link}
						onClick={() => setPopupActive(true)}>
						change
					</p>
				</li>

				<li className={`${s.data_item} ${s.data_shipping}`}>
					<label>
						Delivery amount
						<p>{delivery_shipping ? delivery_shipping + "$" : 'free'}</p>
						<input {...amountInput} type="text" name="shipping" value={delivery_shipping} />
					</label>
				</li>
			</ul>

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
						<CalendarCustom
							setCalendarValue={setCalendarValue}
						/>
					}
				/>
			</CSSTransition >
		</>
	)
}
