import { useState } from 'react';
import s from './InputOrder.module.css'

export function InputOrder({ content, label, error_message, isCalendar, onChange, setPopupActive, ...input_props }) {
	const [focused, setFocused] = useState(false);
	const handleFocus = (e) => {
		e.preventDefault();
		setFocused(true);
	};
	return (
		<li className={`${s.data_item} 
		${s[content === 'courier' ? 'courier' : ''] || ''}
		${s[content === 'profile' ? 'profile' : ''] || ''}
		`}>
			<label>
				{label}
				<input className={`${s.input} ${s[input_props.name === 'shipping' ? 'shipping' : ''] || ''}`}
					{...input_props}
					onChange={onChange}
					onBlur={handleFocus}
					focused={focused.toString()}
				/>
				{input_props.name === 'shipping' &&
					<p className={s.shippinng_data}>{`${input_props.value} ${typeof input_props.value === "number" ? "$" : ''}`}</p>
				}
				<span className={s.error}>{error_message}</span>
				{isCalendar &&
					<p className={s.calendar_link}
						onClick={() => setPopupActive(true)}>
						change
					</p>}
			</label>
		</li>
	)
}
