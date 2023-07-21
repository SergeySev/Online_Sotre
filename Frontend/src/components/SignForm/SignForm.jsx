
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Input } from '../../UI'
import { sign_in } from '../../data/data';
import { add_new_user_req } from '../../requests/requests';
import s from './SignForm.module.css'

export function SignForm({ setActiveWindow }) {

	const [values, setValues] = useState({
		email: '',
		password: '',
	});

	// const dispatch = useDispatch();

	const onChange = (e) => {
		setValues({ ...values, [e.target.name]: e.target.value });
	};

	const sendHandler = (e) => {
		e.preventDefault();
	}

	return (
		<form className={s.form} onSubmit={sendHandler}>
			<h2 className={s.form_title}>Sign in</h2>
			<ul className={s.form_inner}>

				{sign_in.map(input =>
					<Input
						key={input.id}
						{...input}
						value={values[input.name]}
						onChange={onChange}
					/>
				)
				}
			</ul>
			<Button text='Sign in' content="register" />
			<span className={s.register_link}
				onClick={() => setActiveWindow("register")}>
				Or register if you haven't already
			</span>
		</form>
	)
}
