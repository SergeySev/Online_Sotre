import { useEffect, useState } from 'react'
import { Input } from '../../UI'
import { update_password } from '../../data/data'
import s from './FormPasswordChange.module.css'

export function FormPasswordChange() {

	const [values, setValues] = useState({
		old_password: '',
		new_password: '',
		confirm_password: ''
	});

	useEffect(() => {
		update_password.forEach(elem => {
			if (elem.name === "confirm_password") {
				elem.pattern = values.new_password;
			}
			if (values.new_password.length > 0) {
				elem.required = true;
			} else {
				elem.required = false;
			}
		});
	}, [values.new_password]);

	const handleChange = (e) => {
		setValues({ ...values, [e.target.name]: e.target.value })
	}

	return (
		<div className={s.update_form}>
			<h2 className={s.update_title}>
				Change Password
			</h2>
			<ul className={s.inputs_list}>
				{update_password.map(input =>
					<Input
						key={input.id}
						{...input}
						value={values[input.name]}
						onChange={handleChange}
					/>)}
			</ul>
			<p className={s.password_rules}>
				Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character
			</p>
		</div>
	)
}
