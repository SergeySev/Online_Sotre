import { useSelector } from 'react-redux'
import s from './CheckoutOrder.module.css'

export function CheckoutOrder() {
	const total = useSelector(store => store.cart.total_summ)
	const amount = useSelector(store => store.cart.total_amount)
	const discount = -(total * .07).toFixed(2)
	const delivery = 'free'
	return (
		<ul className={s.order_list}>
			<li className={`${s.order_item} ${s.ordet_item_total}`}>
				<p className={s.item_title}>Total</p>
				<p className={s.item_value}>{total}</p>
			</li>
			<li className={s.order_item}>
				<p className={s.item_title}>{`${amount}  goods`}</p>
				<p className={s.item_value}>{total}</p>
			</li>
			<li className={s.order_item}>
				<p className={s.item_title}>Discount</p>
				<p className={s.item_value}>{discount}</p>
			</li>
			<li className={s.order_item}>
				<p className={s.item_title}>Delivery</p>
				<p className={s.item_value}>{delivery}</p>
			</li>

		</ul>
	)
}
