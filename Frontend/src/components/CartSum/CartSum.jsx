import s from './CartSum.module.css'

export function CartSum() {

	const total_summ = 100;
	return (
		<div className={s.total}>
			<p className={s.total_text}>Total sum</p>
			<p className={s.total_summ}>
				{total_summ}
				<span>&#x24;</span>
			</p>
		</div>
	)
}
