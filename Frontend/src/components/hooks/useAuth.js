import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetch_check_token } from "../../requests/requests";

export function useAuth() {
	const {
		id,
		email,
		birthday,
		surname,
		name,
		phone,
		city,
		postcode,
		street,
		house,
		appartment,
		token,
	} = useSelector((store) => store.user);

	useEffect(() => {
		//const saved_token = sessionStorage.getItem("user_token");
		const saved_token = "3abfa1b8-5130-43cd-838c-3d66b35fcf76";
		if (saved_token && !email) checkToken(saved_token);
	}, []);

	const checkToken = async (saved_token) => {
		console.log(
			"🚀 ~ file: useAuth.js:27 ~ checkToken ~ saved_token:",
			saved_token
		);
		const resp = await fetch_check_token({ token });
		//const resp = await fetch_check_token({
		//	token: "7258a462-1f3c-4b42-9916-36a4f5228a7f",
		//});
		console.log("🚀 ~ file: useAuth.js:26 ~ useEffect ~ resp:", resp);
	};

	return {
		isAuth: !!token,
		id: id,
		mail: email,
		token: token,
		birthday,
		surname,
		name,
		tel: phone,
		city: city,
		postcode: postcode,
		street: street,
		house: house,
		appartment: appartment,
		city: city,
		postcode: postcode,
		street: street,
		house: house,
		appartment: appartment,
	};
}
