import { useSelector } from "react-redux"

export function useAuth() {
	const { id, token, email, birthday } = useSelector(store => store.user);

	return {
		isAuth: !!email,
		email,
		token,
		birthday,
		id
	}
}
