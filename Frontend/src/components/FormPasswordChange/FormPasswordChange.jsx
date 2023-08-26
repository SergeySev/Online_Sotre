import { useEffect, useState } from "react";
import { Button, Input } from "../../UI";
import { update_password } from "../../data/data";
import s from "./FormPasswordChange.module.css";
import { fetch_update_password } from "../../requests/requests";
import { useDispatch } from "react-redux";

export function FormPasswordChange() {
	const [values, setValues] = useState({
		old_password: "",
		new_password: "",
		confirm_password: "",
	});

	const dispatch = useDispatch();

	useEffect(() => {
		if (values?.new_password.length > 0) {
			update_password.forEach((elem) => {
				if (elem.name === "confirm_password") {
					elem.pattern = values.new_password;
				}
				if (values.new_password.length > 0) {
					elem.required = true;
				} else {
					elem.required = false;
				}
			});
		}
	}, [values.new_password]);

	const handleChange = (e) => {
		setValues({ ...values, [e.target.name]: e.target.value });
	};

	const submit = (e) => {
		e.preventDefault();
		const new_password = e.target.new_password.value;

		const response = fetch_update_password(new_password);
		dispatch(set_user(response));
	};

	return (
		<div className={s.update_form}>
			<h2 className={s.update_title}>Change Password</h2>
			<form onSubmit={submit}>
				<ul className={s.inputs_list}>
					{update_password.map((input) => (
						<Input
							key={input.id}
							{...input}
							value={values[input.name]}
							onChange={handleChange}
						/>
					))}
				</ul>
				<Button text="change password" content="profile" />
				<p className={s.password_rules}>
					Password should be 8-20 characters and include at least 1 letter, 1
					number and 1 special character
				</p>
			</form>
		</div>
	);
}
