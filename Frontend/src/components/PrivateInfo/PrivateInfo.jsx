import { useContext, useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { courier_inputs, user_inputs } from "../../data/data";
import { Button, InputOrder } from "../../UI";
import { FormPasswordChange } from "../";
import { fetch_update_user } from "../../requests/requests";
import { useDispatch } from "react-redux";
import { set_user } from "../../store/reducers/userSlice";
import { PopUpContext } from "../../context/popUpContext";
import s from "./PrivateInfo.module.css";

export function PrivateInfo() {
	const dispatch = useDispatch();
	const contextPopUp = useContext(PopUpContext);
	const {
		id,
		firstName,
		lastName,
		email,
		phoneNumber,
		city,
		postCode,
		street,
		houseNumber,
		apartmentNumber,
	} = useAuth();

	const [values, setValues] = useState({
		firstName: firstName ?? "",
		lastName: lastName ?? "",
		email: email ?? "",
		phoneNumber: phoneNumber ?? "",
		city: city ?? "",
		postCode: postCode ?? "",
		street: street ?? "",
		houseNumber: houseNumber ?? "",
		apartmentNumber: apartmentNumber ?? "",
	});

	useEffect(() => {
		if (!values.firstName) {
			setValues({
				firstName: firstName ?? "",
				lastName: lastName ?? "",
				email: email ?? "",
				phoneNumber: phoneNumber ?? "",
				city: city ?? "",
				postCode: postCode ?? "",
				street: street ?? "",
				houseNumber: houseNumber ?? "",
				apartmentNumber: apartmentNumber ?? "",
			});
		}
	});

	const onChange = (e) => {
		setValues({ ...values, [e.target.name]: e.target.value });
	};

	const submit = (e) => {
		e.preventDefault();
		const {
			firstName,
			lastName,
			phoneNumber,
			city,
			postCode,
			street,
			houseNumber,
			apartmentNumber,
		} = e.target;

		const newData = {
			id,
			firstName: firstName.value ?? "",
			lastName: lastName.value ?? "",
			phoneNumber: phoneNumber.value ?? "",
			address: {
				country: "n/d",
				city: city.value ?? "",
				street: street.value ?? "",
				houseNumber: houseNumber.value ?? "",
				apartmentNumber: apartmentNumber.value ?? "",
				postCode: postCode.value ?? "",
			},
		};

		const resultPromise = fetch_update_user(newData);
		resultPromise
			.then((responseData) => {
				//console.log("Response from server:", responseData);
				dispatch(set_user(responseData));
				contextPopUp.setTitle("user_data");
				contextPopUp.setPopupActive(true);
			})
			.catch((error) => {
				console.error("An error occurred:", error);
			});
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
