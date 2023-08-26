import { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { courier_inputs, user_inputs } from "../../data/data";
import { Button, InputOrder } from "../../UI";
import { FormPasswordChange } from "../";
import { useNavigate } from "react-router-dom";
import { fetch_update_user } from "../../requests/requests";
import { useDispatch } from "react-redux";
import { set_user, update_user } from "../../store/reducers/userSlice";
import s from "./PrivateInfo.module.css";

export function PrivateInfo() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const {
		isAuth,
		id,
		firstName,
		lastName,
		email,
		phoneNumber,
		birthDate,
		city,
		postCode,
		street,
		houseNumber,
		apartmentNumber,
	} = useAuth();
	//console.log("🚀 ~ file: PrivateInfo.jsx:29 ~ PrivateInfo ~ isAuth:", isAuth);

	//useEffect(() => {
	//	if (!isAuth) {
	//		navigate("/OnlineStore");
	//	}
	//}, [isAuth]);

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
		//console.log("🚀 ~ file: PrivateInfo.jsx:53 ~ submit ~ e:", e.target);
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

		//const inputDate = birthday;
		//const parts = inputDate.split(".");
		//const formattedDate = new Date(
		//	`${parts[2]}-${parts[1]}-${parts[0]}T00:00:00.000Z`
		//).toISOString();

		const newData = {
			id,
			firstName: firstName.value ?? "",
			lastName: lastName.value ?? "",
			phoneNumber: phoneNumber.value ?? "",
			//email: mail,
			//birthDate: birthday,
			address: {
				country: "n/d",
				city: city.value ?? "",
				street: street.value ?? "",
				houseNumber: houseNumber.value ?? "",
				apartmentNumber: apartmentNumber.value ?? "",
				postCode: postCode.value ?? "",
			},
		};
		//console.log("🚀 ~ file: PrivateInfo.jsx:88 ~ submit ~ newData:", newData);

		//fetch_update_user(newData);
		const resultPromise = fetch_update_user(newData);
		resultPromise
			.then((responseData) => {
				console.log("Response from server:", responseData);
				dispatch(set_user(responseData));
			})
			.catch((error) => {
				console.error("An error occurred:", error);
			});
		//console.log("🚀 ~ file: PrivateInfo.jsx:80 ~ submit ~ response:", response);
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
