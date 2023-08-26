import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SubmitHandler } from "react-hook-form";
import { Button, InputOrder } from "../../../UI";
import { customer_data } from "../../../store/reducers/orderSlice";
import { user_inputs } from "../../../data/data";
import s from "./TabData.module.css";
import { useAuth } from "../../hooks/useAuth";

export function TabData({ activeTab, setActiveTab }) {
	const { first_name, last_name, phone, e_mail } = {
		...useSelector((store) => store.order),
	};

	const { email, lastName, firstName, phoneNumber } = useAuth();

	const [values, setValues] = useState({
		firstName: first_name || firstName,
		lastName: last_name || lastName,
		phoneNumber: phone || phoneNumber,
		email: e_mail || email,
	});

	useEffect(() => {
		if (!values.firstName) {
			setValues({
				firstName: first_name || firstName,
				lastName: last_name || lastName,
				phoneNumber: phone || phoneNumber,
				email: e_mail || email,
			});
		}
	});

	const dispatch = useDispatch();

	const onChange = (e) => {
		setValues({ ...values, [e.target.name]: e.target.value });
	};

	const saveData = (event) => {
		event.preventDefault();
		const { firstName, lastName, phoneNumber, email } = event.target;

		const obj = {
			firstName: firstName?.value,
			lastName: lastName?.value,
			phoneNumber: phoneNumber?.value,
			email: email?.value,
		};

		if (activeTab < 3) {
			setActiveTab(++activeTab);
		}
		dispatch(customer_data(obj));
	};

	return (
		<form className={s.checkout_form} onSubmit={saveData}>
			<ul className={s.data_list}>
				{user_inputs.map((input) => (
					<InputOrder
						key={input.id}
						{...input}
						value={values[input.name]}
						onChange={onChange}
					/>
				))}
			</ul>
			<Button text="next" content="checkout" />
		</form>
	);
}
