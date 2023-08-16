import { useSelector } from "react-redux"

export function useAuth() {
	const { token, email, birthday, surname, name, phone } = useSelector(store => store.user);

	return {
		isAuth: !!token,
		mail: email,
		token,
		birthday,
		surname,
		name,
		tel: phone
	}
}
