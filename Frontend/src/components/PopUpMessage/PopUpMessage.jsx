import { HashLink } from "react-router-hash-link";
import s from "./PopUpMessage.module.css";
import { Button } from "../../UI";

export function PopUpMessage({ message, setActive }) {
	return (
		<div className={s.message_wrapper}>
			<p className={s.message}>{message}</p>
			<HashLink to="/Online_Store" onClick={() => setActive(false)}>
				<Button text="To home" content="phone_alert" />
			</HashLink>
		</div>
	);
}
