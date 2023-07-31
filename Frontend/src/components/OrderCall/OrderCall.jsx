import { useContext } from 'react';
import s from './OrderCall.module.css'
import { PopUpContext } from '../../context/popUpContext';

export function OrderCall({ isBlocked }) {
	const contextPopUp = useContext(PopUpContext);
	const handleClick = () => {
		contextPopUp.setTitle('phone');
		contextPopUp.setPopupActive(true);
	}
	return (
		<div className={`${s.call_context} ${s[isBlocked] || ''}`}
			onClick={handleClick}
		>
			<p className={s.phone}>+7 495 120-32-14</p>
			<p className={s.order_text}>Order call</p>
		</div>
	)
}
