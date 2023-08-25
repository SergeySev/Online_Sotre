import { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { courier_inputs, user_inputs } from "../../data/data";
import { Button, InputOrder } from "../../UI";
import { FormPasswordChange } from "../";
import { useNavigate } from "react-router-dom";
import { fetch_update_user } from "../../requests/requests";
import { useDispatch } from "react-redux";
import { set_user } from "../../store/reducers/userSlice";
import s from "./PrivateInfo.module.css";

export function PrivateInfo() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const {
		isAuth,
		id,
		surname,
		name,
		tel,
		mail,
		city,
		postcode,
		street,
		house,
		appartment,
		birthday,
	} = useAuth();

	useEffect(() => {
		if (!isAuth) {
			navigate("/OnlineStore");
		}
	}, [isAuth]);

	const [values, setValues] = useState({
		last_name: surname ?? "",
		first_name: name ?? "",
		phone: tel ?? "",
		email: mail ?? "",
		city: city ?? "",
		postcode: postcode ?? "",
		street: street ?? "",
		house: house ?? "",
		appartment: appartment ?? "",
	});

	const onChange = (e) => {
		setValues({ ...values, [e.target.name]: e.target.value });
	};

	const submit = (e) => {
		e.preventDefault();
		const [surname, name, tel, city, postcode, street, house, appartment] =
			e.target;

		const inputDate = birthday;
		const parts = inputDate.split(".");
		const formattedDate = new Date(
			`${parts[2]}-${parts[1]}-${parts[0]}T00:00:00.000Z`
		).toISOString();

		const newData = {
			id,
			lastName: surname.value ?? "",
			firstName: name.value ?? "",
			phoneNumber: tel.value ?? "",
			email: mail,
			birthDate: formattedDate,
			address: {
				city: city.value ?? "",
				street: street.value ?? "",
				houseNumber: house.value ?? "",
				apartmentNumber: appartment.value ?? "",
				postCode: postcode.value ?? "",
			},
		};

		fetch_update_user(newData);
		//dispatch(set_user(response));
	};

	return (
		<>
			<h2 className={s.profile_title}>Personal data</h2>
			<form className={s.profile_form} onSubmit={submit}>
				<div className={s.form_wrapper}>
					<ul className={`${s.data_list} ${s.data_person}`}>
						{user_inputs.map((input) => (
							<InputOrder
								key={input.id}
								{...input}
								value={values[input.name]}
								onChange={onChange}
							/>
						))}
					</ul>
					<ul className={`${s.data_list} ${s.data_address}`}>
						{courier_inputs.map((input) => (
							<InputOrder
								key={input.id}
								{...input}
								content="profile"
								value={values[input.name]}
								onChange={onChange}
							/>
						))}
					</ul>
				</div>
				<Button text="save changes" content="profile" />
			</form>
			<FormPasswordChange />
		</>
	);
}
