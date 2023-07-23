import { useSelector } from "react-redux"

export function useAuth() {
	const { id, token, email, birthday, surname, name, phone } = useSelector(store => store.user);

	return {
		isAuth: !!token,
		mail: email,
		token,
		birthday,
		id,
		surname,
		name,
		tel: phone
	}
}
