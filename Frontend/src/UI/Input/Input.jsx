import { useState } from 'react';
import s from './Input.module.css'

export function Input({ label, error_message, onChange, ...input_props }) {

	const [focused, setFocused] = useState(false);
	const handleFocus = (e) => {
		e.preventDefault();
		setFocused(true);
	};
	return (
		<li className={s.item}>
			<label className={s.label}>
				{label}
				<input
					className={s.input}
					{...input_props}
					onChange={onChange}
					onBlur={handleFocus}
					focused={focused.toString()}
				/>
				<span className={s.error}>{error_message}</span>
			</label>
		</li>
	)
}

