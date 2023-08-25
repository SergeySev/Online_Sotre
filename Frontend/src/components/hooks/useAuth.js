import { useSelector } from "react-redux";

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

	return {
		isAuth: !!email,
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
