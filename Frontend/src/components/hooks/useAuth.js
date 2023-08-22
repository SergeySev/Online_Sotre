import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export function useAuth() {
	const { id, email, birthday, surname, name, phone, city, postcode, street, house, appartment } = useSelector(
		(store) => store.user
	);
	const token = JSON.parse(sessionStorage.getItem("user_token")) || "";

	//useEffect(()=>{
	//	if(token){
			
	//	}
	//})

	return {
		isAuth: !!token,
		id: id,
		mail: email,
		token,
		birthday,
		surname,
		name,
		tel: phone,
		city:city, 
		postcode:postcode, 
		street:street, 
		house:house, 
		appartment:appartment
	};
}
