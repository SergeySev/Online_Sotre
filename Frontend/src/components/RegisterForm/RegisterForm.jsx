import { useEffect, useState } from 'react';
import { Input, Button } from '../../UI/';
import { useDispatch } from 'react-redux';
import { registrations } from '../../data/data';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import s from './RegisterForm.module.css';
import { set_user } from '../../store/reducers/userSlice';

export function RegisterForm({ setActiveWindow, setActive }) {

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

	const dispatch = useDispatch();

	function register_new_user(user) {
		const { surname, name, birthday, email, phone, password } = user;
		const auth = getAuth();
		createUserWithEmailAndPassword(auth, email, password)
			// createUserWithEmailAndPassword(auth, surname, name, birthday, email, phone, password)
			.then(({ user }) => {
				// console.log("🚀 ~ file: RegisterForm.jsx:40 ~ .then ~ user:", user)
				dispatch(set_user({
					id: user.uid,
					surname,
					name,
					phone,
					birthday,
					email: user.email,
					token: user.accessToken
				}))
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log("🚀 ~ file: RegisterForm.jsx:50 ~ register_new_user ~ errorCode:", errorCode)
				console.log("🚀 ~ file: RegisterForm.jsx:52 ~ register_new_user ~ errorMessage:", errorMessage)

			});
		setActive(false);
	}

	const sendHandler = (e) => {
		e.preventDefault();

		const { surname, name, email, phone, birthday, password } = e.target

		const newUser = {
			surname: surname.value,
			name: name.value,
			email: email.value,
			phone: phone.value,
			birthday: birthday.value,
			password: password.value
		}
		// register_user(newUser);
		register_new_user(newUser);

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
			<Button text='Registration' content="register" type='submit' />
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
