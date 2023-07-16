import { useDispatch, useSelector } from 'react-redux'
import { useForm, SubmitHandler } from "react-hook-form"
import { Button, InputOrder } from '../../../UI';
import { customer_data } from '../../../store/reducers/orderSlice';
import s from './TabData.module.css'
import { useState } from 'react';
import { user_inputs } from '../../../data/data';

export function TabData({ activeTab, setActiveTab }) {
	const { first_name, last_name, phone, email } = { ...useSelector(store => store.order) };

	const [values, setValues] = useState({
		first_name: first_name ? first_name : '',
		last_name: last_name ? last_name : '',
		phone: phone ? phone : '',
		email: email ? email : ''
	});

	const dispatch = useDispatch();

	const onChange = (e) => {
		setValues({ ...values, [e.target.name]: e.target.value });
	};

	const saveData = (event) => {
		event.preventDefault();
		const { first_name, last_name, phone, email } = event.target

		const obj = {
			first_name: first_name?.value,
			last_name: last_name?.value,
			phone: phone?.value,
			email: email?.value,
		}

		if (activeTab < 3) {
			setActiveTab(++activeTab)
		}
		dispatch(customer_data(obj));
	}

	return (
		<form className={s.checkout_form} onSubmit={saveData}>
			<ul className={s.data_list}>
				{user_inputs.map(input =>
					<InputOrder
						key={input.id}
						{...input}
						value={values[input.name]}
						onChange={onChange} />)}
			</ul>
			<Button
				text='next'
				content='checkout'
			/>
		</form>
	)
}
