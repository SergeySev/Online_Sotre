import { useSelector } from 'react-redux';
import s from './CartSum.module.css'

export function CartSum() {

	const total_summ = useSelector(store => store.cart.total_summ);
	return (
		<div className={s.total}>
			<p className={s.total_text}>Total sum</p>
			<div className={s.summ_wrapper}>
				<p className={s.total_summ}>
					{total_summ}
					<span> &#x24;</span>
				</p>
			</div>
		</div>
	)
}
