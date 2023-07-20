import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Input, Button } from '../../UI/'
import { add_new_user_req } from '../../requests/requests'
import { registrations } from '../../data/data'
import s from './RegisterForm.module.css'

export function RegisterForm({ setActiveWindow }) {

	const [values, setValues] = useState({
		surname: '',
		name: '',
		phone: '',
		email: '',
		password: '',
		confirm_password: ''
	});

	useEffect(() => {
		registrations.forEach(elem => {
			if (elem.name === "confirm_password") {
				elem.pattern = values.password;
			}
		})
	}, [values.password])

	const onChange = (e) => {
		setValues({ ...values, [e.target.name]: e.target.value });
	};


	const sendHandler = (e) => {
		e.preventDefault();

		const { surname, name, email, phone, birthday, password } = e.target

		const newUser = {
			surname: surname.value,
			name: name.value,
			email: email.value,
			birthday: birthday.value,
			password: password.value
		}
		add_new_user_req(newUser);
	}

	return (
		<form className={s.form} onSubmit={sendHandler}>
			<h2 className={s.form_title}>Registration</h2>
			<ul className={s.form_inner}>

				{registrations.map(input =>
					<Input
						key={input.id}
						{...input}
						value={values[input.name]}
						password_confirm={values.password}
						onChange={onChange}
					/>
				)
				}
			</ul>
			<Button text='Registration' content="registr" />
			<p className={s.form_agreement}>
				Clicking on the button you agree to the <span>processing of your personal data</span>
			</p>
			<p >
				Already have an account?
			</p>
			<span className={s.sign_in}
				onClick={() => setActiveWindow("sign")}
			>Sign in</span>
		</form>
	)
}
