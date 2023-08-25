import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useDispatch } from "react-redux";
import s from "./PopUpProfile.module.css";
import { fetch_user_logout } from "../../requests/requests";
import { logout_user } from "../../store/reducers/userSlice";

export function PopUpProfile({ setActive }) {
	const { id, surname, name, mail } = useAuth();

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleNavigate = () => {
		navigate("/user");
		setActive(false);
	};

	const handleOutAuth = () => {
		fetch_user_logout(id);
		dispatch(logout_user());
		setActive(false);
		navigate("/Online_Store");
	};

	return (
		<div className={s.popup_profile}>
			<span className={s.profile_fullname}>
				{name} {surname}
			</span>
			<span className={s.profile_email}>{mail}</span>
			<p className={s.profile} onClick={handleNavigate}>
				Manage yor personal account
			</p>
			<p className={s.logout} onClick={handleOutAuth}>
				Log out
			</p>
		</div>
	);
}
