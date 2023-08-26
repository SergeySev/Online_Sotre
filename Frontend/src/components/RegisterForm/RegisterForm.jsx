import { useEffect, useState } from "react";
import { Input, Button } from "../../UI/";
import { useDispatch } from "react-redux";
import { registrations } from "../../data/data";
import { set_user } from "../../store/reducers/userSlice";
import { register_user } from "../../requests/requests";
import s from "./RegisterForm.module.css";

export function RegisterForm({ setActiveWindow, setActive }) {
	const [values, setValues] = useState({
		firstName: "",
		lastName: "",
		email: "",
		phoneNumber: "",
		password: "",
		confirm_password: "",
	});

	useEffect(() => {
		registrations.forEach((elem) => {
			if (elem.name === "confirm_password") {
				elem.pattern = values.password;
			}
		});
	}, [values.password]);

	const onChange = (e) => {
		setValues({ ...values, [e.target.name]: e.target.value });
	};

	const dispatch = useDispatch();

	const sendHandler = async (e) => {
		e.preventDefault();

		const { firstName, lastName, email, phoneNumber, birthDate, password } =
			e.target;

		const newUser = {
			id: Date.now(),
			firstName: firstName.value,
			lastName: lastName.value,
			email: email.value,
			phoneNumber: phoneNumber.value,
			password: password.value,
			birthDate: new Date(birthDate.value)
				.toISOString()
				.replace(/\.000Z$/, ".951Z"),
		};

		const responswData = await register_user(newUser);
		dispatch(set_user(responswData));
		setActive(false);
	};

	return (
		<form className={s.form} onSubmit={sendHandler}>
			<h2 className={s.form_title}>Registration</h2>
			<ul className={s.form_inner}>
				{registrations.map((input) => (
					<Input
						key={input.id}
						{...input}
						value={values[input.name]}
						password_confirm={values.password}
						onChange={onChange}
					/>
				))}
			</ul>
			<Button text="Registration" content="register" type="submit" />
			<p className={s.form_agreement}>
				Clicking on the button you agree to the{" "}
				<span>processing of your personal data</span>
			</p>
			<p>Already have an account?</p>
			<span className={s.sign_in} onClick={() => setActiveWindow("sign")}>
				Sign in
			</span>
		</form>
	);
}
