import s from './WorkingHours.module.css'

export default function WorkingHours() {
	return (
		<>
			<p className={s.hours}>Working hours: 10:00 - 20:00</p>
			<div className={s.phones}>
				<p className={s.phone}>+7 495 120-32-14</p>
				<p className={s.order_call}>Order call</p>
			</div>
		</>
	)
}
