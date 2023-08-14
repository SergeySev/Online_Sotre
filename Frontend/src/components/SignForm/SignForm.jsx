
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Input } from '../../UI'
import { sign_in } from '../../data/data';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useAuth } from '../hooks/useAuth';
import { sign_auth_user } from '../../store/reducers/userSlice';
import s from './SignForm.module.css'

export function SignForm({ setActiveWindow, setActive }) {

	const [values, setValues] = useState({
		email: '',
		password: '',
	});

	const [isError, setIsError] = useState(false);

	// const { isAuth, token } = useAuth()
	const dispatch = useDispatch()

	const onChange = (e) => {
		setValues({ ...values, [e.target.name]: e.target.value });
		setIsError(false);
	};

	const handleRememberPassword = () => {
		setActiveWindow('error')
	}

	function sign_new_user(email, password) {
		const auth = getAuth();
		signInWithEmailAndPassword(auth, email, password)
			.then(({ user }) => {
				dispatch(sign_auth_user(user.accessToken))
				setActive(false)
				setIsError(false);
			})
			.catch((error) => {
				setIsError(true);
			});
	};

	const sendHandler = (e) => {
		e.preventDefault();
		const { email, password } = e.target
		// sign_in_user(email.value, password.value)
		sign_new_user(email.value, password.value)
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
				<div className={`${s.error_message} ${s[isError ? 'active' : ''] || ''}`}>
					<p>Incorrect email or password</p>
					<p
						className={s.remember_link}
						onClick={handleRememberPassword}>
						Forgot password?
					</p>
				</div>
			</ul>
			<Button text='Sign in' content="register" />
			<span className={s.register_link}
				onClick={() => setActiveWindow("register")}>
				Or register if you haven't already
			</span>
		</form>
	)
}
