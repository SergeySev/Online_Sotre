import { useEffect, useState, useContext } from "react";
import { Button, Input } from "../../UI";
import { update_password } from "../../data/data";
import { fetch_update_password } from "../../requests/requests";
import { useDispatch } from "react-redux";
import { set_user } from "../../store/reducers/userSlice";
import { useAuth } from "../hooks/useAuth";
import { PopUpContext } from "../../context/popUpContext";
import s from "./FormPasswordChange.module.css";

export function FormPasswordChange() {
	const { id } = useAuth();
	const [values, setValues] = useState({
		old_password: "",
		new_password: "",
		confirm_password: "",
	});
	const contextPopUp = useContext(PopUpContext);
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
		const password = e.target.new_password.value;

		const resultPromise = fetch_update_password({ id, password });
		resultPromise
			.then((responseData) => {
				dispatch(set_user(responseData));
				contextPopUp.setTitle("password");
				contextPopUp.setPopupActive(true);
			})
			.catch((error) => {
				console.error("An error occurred:", error);
			});
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
