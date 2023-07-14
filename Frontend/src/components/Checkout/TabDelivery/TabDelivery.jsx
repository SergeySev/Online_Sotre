import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { delivery_data } from '../../../store/reducers/orderSlice';
import { Button } from '../../../UI';
import { TabCourier, TabPickup } from '../';
import s from './TabDelivery.module.css'
import { useForm } from 'react-hook-form';

export function TabDelivery({ activeTab, setActiveTab }) {
	const [delivery_type, setDeliverytype] = useState('courier');
	// console.log("🚀 ~ file: TabDelivery.jsx:11 ~ TabDelivery ~ delivery_type:", delivery_type)

	const dispatch = useDispatch();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ mode: 'all' });

	// const deliveryTitle = register('title', {
	// 	required: true,
	// });
	const cityInput = register('city', {
		required: 'required field',
	});
	const postInput = register('post', {
		required: 'required field',
	});
	const streetInput = register('street', {
		required: 'required field',
	});
	const houseInput = register('house', {
		required: 'required field',
	});
	const appartmentInput = register('app', {
	});
	const dateInput = register('date', {
		// required: 'required field',
	});
	const amountInput = register('shipping', {
		// required: 'required field',
	});
	const addressInput = register('pickup_address', {});

	const courierInputs = {
		cityInput,
		postInput,
		streetInput,
		houseInput,
		appartmentInput,
		dateInput,
		amountInput
	}

	const radioChange = (e) => {
		// console.log("🚀 ~ file: TabDelivery.jsx:29 ~ radioChange ~ e:", e.target)
		setDeliverytype(e.target.value)
	}

	const saveData = (data) => {
		console.log("🚀 ~ file: TabDelivery.jsx:31 ~ saveData ~ data:", data)
		// console.log("🚀 ~ file: TabDelivery.jsx:36 ~ saveData ~ data:", data)
		// e.preventDefault();
		// const { city, street, house, frame, app, date, shipping } = e.target
		// const obj = {
		// 	title: 'courier',
		// 	city: city?.value,
		// 	street: street?.value,
		// 	house: house?.value,
		// 	frame: frame?.value,
		// 	app: app?.value,
		// 	date: date?.value,
		// 	shipping: shipping?.value,
		// }

		if (activeTab < 3) {
			setActiveTab(++activeTab)
		}
		dispatch(delivery_data(data));
	}

	return (
		<>
			<h2 className={s.delivery_title}>
				Choose the delivery option that suits you:
			</h2>
			<form className={s.checkout_form} onSubmit={handleSubmit(saveData)}>

				<ul className={s.radio_buttons}>
					<li className={`${s.radio_item} ${s[delivery_type === 'courier' ? 'active' : ''] || ''}`}>
						<label>
							<input
								// {...deliveryTitle}
								type="radio"
								value="courier"
								// name="delivery"
								// checked={delivery_type === 'courier'}
								onChange={radioChange} />
							Courier delivery
						</label>
					</li>
					<li className={`${s.radio_item} ${s[delivery_type === 'pickup' ? 'active' : ''] || ''}`}>
						<label>
							<input
								// {...deliveryTitle}
								type="radio"
								value="pickup"
								// name="delivery"
								// checked={delivery_type === 'pickup'}
								onChange={radioChange} />
							Pickup
						</label>
					</li>
				</ul>

				{delivery_type === "courier" ?
					<TabCourier errors={errors} {...courierInputs} /> :
					<TabPickup errors={errors} addressInput={addressInput} />}

				<Button
					text='next'
					content='checkout'
				// onSubmit={saveData}
				// type='submit'
				/>
			</form>


		</>
	)
}
