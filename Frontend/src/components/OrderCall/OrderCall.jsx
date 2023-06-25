import s from './OrderCall.module.css'

export function OrderCall({ isBlocked }) {
	return (
		<div className={`${s.call_context} ${s[isBlocked] || ''}`}>
			<p className={s.phone}>+7 495 120-32-14</p>
			<p className={s.order_text}>Order call</p>
		</div>
	)
}
