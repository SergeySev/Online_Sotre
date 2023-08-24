import { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Input } from "../../UI";
import { call_request } from "../../data/data";
import s from "./CallRequest.module.css";

export function CallRequest({ setActiveWindow }) {
	const [values, setValues] = useState({
		name: "",
		phone: "",
		message: "",
	});

	// const dispatch = useDispatch();

	const onChange = (e) => {
		setValues({ ...values, [e.target.name]: e.target.value });
	};

	const sendHandler = (e) => {
		e.preventDefault();
		const { name, phone, message } = e.target;
		const newRequest = {
			name: name.value,
			phone: phone.value,
			message: message.value,
		};
		//console.log("🚀 ~ file: CallRequest.jsx:29 ~ sendHandler ~ newRequest:", newRequest)
		setActiveWindow("alert");
	};

	return (
		<form
			className={s.form}
			onClick={(e) => e.stopPropagation(e)}
			onSubmit={sendHandler}
		>
			<h2 className={s.form_title}>Request a call</h2>
			<ul className={s.form_inner}>
				{call_request.map((input) => (
					<Input
						key={input.id}
						{...input}
						value={values[input.name]}
						onChange={onChange}
					/>
				))}
				<li className={s.item}>
					<label className={s.label}>
						Comments
						<textarea
							className={s.area}
							name="message"
							type="textarea"
							required
						/>
					</label>
				</li>
			</ul>
			<Button text="Send" content="register" />
			<p className={s.form_agreement}>
				Clicking on the button you agree to the{" "}
				<span>processing of your personal data</span>
			</p>
		</form>
	);
}
