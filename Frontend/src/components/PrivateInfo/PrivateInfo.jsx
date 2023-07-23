import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { courier_inputs, user_inputs } from '../../data/data'
import { Button, InputOrder } from '../../UI';
import { FormPasswordChange } from '../';
import s from './PrivateInfo.module.css'

export function PrivateInfo() {

	const { surname, name, phone, email } = useAuth();


	const [values, setValues] = useState({
		surname: surname ?? '',
		name: name ?? '',
		phone: phone ?? '',
		email: email ?? ''
	});

	const onChange = (e) => {
		setValues({ ...values, [e.target.name]: e.target.value });
	};

	const submit = (e) => {
		e.preventDefault();
		console.log("🚀 ~ file: PrivateInfo.jsx:25 ~ submit ~ e:", e.target)
	}


	return (
		<>
			<h2 className={s.profile_title}>Personal data</h2>
			<form className={s.profile_form} onSubmit={submit}>
				<div className={s.form_wrapper}>
					<ul className={`${s.data_list} ${s.data_person}`}>
						{user_inputs.map(input =>
							<InputOrder
								key={input.id}
								{...input}
								value={values[input.name]}
								onChange={onChange} />)}
					</ul>
					<ul className={`${s.data_list} ${s.data_address}`}>
						{courier_inputs.map(input =>
							<InputOrder
								key={input.id}
								{...input}
								content='profile'
								value={values[input.name]}
								onChange={onChange} />)}
					</ul>
				</div>
				<Button text='save changes' content="profile" />
				<FormPasswordChange />
			</form>
		</>
	)
}
