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
		console.log("🚀 ~ file: useAuth.js:23 ~ useEffect ~ token:", token);
		console.log("🚀 ~ file: useAuth.js:24 ~ useEffect ~ email:", email);
		if (token && !email) fetch_check_token(token);
	}, []);

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
	};
}
