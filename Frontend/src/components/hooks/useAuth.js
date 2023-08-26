import { useSelector } from "react-redux";

export function useAuth() {
	const {
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
		purchases,
		token,
	} = useSelector((store) => store.user);

	return {
		isAuth: !!email,
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
		purchases,
		token,
	};
}
