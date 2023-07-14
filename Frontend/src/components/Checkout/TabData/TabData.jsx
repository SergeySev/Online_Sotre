import { useDispatch, useSelector } from 'react-redux'
import { useForm, SubmitHandler } from "react-hook-form"
import { Button } from '../../../UI';
import { customer_data } from '../../../store/reducers/orderSlice';
import s from './TabData.module.css'
import { useState } from 'react';

export function TabData({ activeTab, setActiveTab }) {
	const { last_name, first_name, phone, email, } = { ...useSelector(store => store.order) };

	const [first_name_state, setFirstNameState] = useState(first_name);
	const [last_name_state, setLastNameState] = useState(last_name);
	const [phone_state, setPhoneState] = useState(phone);
	const [email_state, setEmailState] = useState(email);

	const dispatch = useDispatch()

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ mode: 'all' });

	const firstNameInput = register('first_name', {
		required: 'required field, minimum 2 characters',
		minLength: {
			value: 2,
			message: 'wrong format first name',
		},
	});

	const lastNameInput = register('last_name', {
		required: 'required field, minimum 2 characters',
		minLength: {
			value: 2,
			message: 'wrong format last name',
		},
	});

	const phoneInput = register('phone', {
		required: 'required field in format +99 999',
		pattern: {
			value:
				/^\+\d{5,}$/,
			message: 'wrong format phone',
		},
	});

	const emailInput = register('email', {
		required: 'required field, email format',
		pattern: {
			value:
				// /^([A-z])+([0-9-_.])*([A-z0-9-_.])*@([A-z])+([0-9-_.])*([A-z0-9-_.])*[.]([A-z]){2,3}$/,
				/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
			message: 'wrong format email',
		},
	});




	const saveData = (data) => {
		// console.log("🚀 ~ file: TabData.jsx:51 ~ saveData ~ data:", data)
		// e.preventDefault();
		// const { first_name, last_name, phone, email } = data
		// const obj = {
		// 	first_name,
		// 	last_name,
		// 	phone,
		// 	email,
		// }
		if (activeTab < 3) {
			setActiveTab(++activeTab)
		}
		dispatch(customer_data(data));
	}

	return (
		<form className={s.checkout_form} onSubmit={handleSubmit(saveData)}>
			{/* <form className={s.checkout_form} onSubmit={handleSubmit(saveData)}> */}
			<ul className={s.data_list}>
				{/* <li className={s.data_item}> */}
				<li className={`${s.data_item} ${s[errors.last_name && 'error_style']}`}>
					<label>
						Last name
						<input
							{...lastNameInput}
							type="text"
							name="last_name"
							value={last_name_state}
							onChange={(e) => setLastNameState(e.target.value)}
							placeholder="your last name"
						/>
					</label>
				</li>
				<li className={`${s.data_item} ${s[errors.first_name && 'error_style']}`}>
					{/* <li className={s.data_item}> */}
					<label>
						First name
						<input
							{...firstNameInput}
							type="text"
							name="first_name"
							value={first_name_state}
							onChange={(e) => setFirstNameState(e.target.value)}
							// placeholder={
							// 	errors.first_name ? errors.first_name.message :
							// 		first_name ? first_name : "your first name"
							// }
							placeholder="your first name"
						/>
					</label>
					{/* <p className={s.error} >{errors.first_name?.message}</p> */}
				</li>
				<li className={`${s.data_item} ${s[errors.phone && 'error_style']}`}>
					{/* <li className={s.data_item}> */}
					<label>
						Phone number
						<input
							{...phoneInput}
							type="phone"
							name="phone"
							value={phone_state}
							onChange={(e) => setPhoneState(e.target.value)}
							// placeholder={
							// 	errors.phone ? errors.phone.message :
							// 		phone ? phone : "+49 999 99 99"
							// }
							placeholder="+49 999 99 99"
						/>
					</label>
					{/* <p
						className={`${s.error} ${s[errors.phone?.message ? 'active' : ''] || ''}`}
						style={{ transform: "translateY(0)" }}
						onClick={hideError}>
						{errors.phone?.message}</p> */}
				</li>
				<li className={`${s.data_item} ${s[errors.email && 'error_style']}`}>
					{/* <li className={s.data_item}> */}
					<label>
						e-mail
						<input
							{...emailInput}
							type="email"
							name="email"
							value={email_state}
							onChange={(e) => setEmailState(e.target.value)}
							// placeholder={
							// 	errors.email ? errors.email.message :
							// 		email ? email : "your_email@mail.com"
							// }
							placeholder='your_email@mail.com'
						/>
					</label>
					{/* <p className={s.error}>{errors.email?.message}</p> */}
				</li>
			</ul>
			<Button
				text='next'
				content='checkout'
			// type="submit"
			/>
		</form>
	)
}
