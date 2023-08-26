import { useSelector } from 'react-redux'
import s from './CheckoutOrder.module.css'
import { useEffect } from 'react'

export function CheckoutOrder() {

	const cart_summ = useSelector(store => store.cart.total_summ)
	const amount = useSelector(store => store.cart.total_amount)
	const discount = -(cart_summ * .07).toFixed(2)
	const delivery = useSelector(store => store.order.delivery[0].shipping)
	const total = (cart_summ + discount + (delivery ? +delivery : 0)).toFixed(2)

	useEffect(() => {

	}, [delivery])

	return (
		<ul className={s.order_list}>
			<li className={`${s.order_item} ${s.ordet_item_total}`}>
				<p className={s.item_title}>Total</p>
				<p className={s.item_value}>{total} &#36;</p>
			</li>
			<li className={s.order_item}>
				<p className={s.item_title}>{`${amount}  goods`}</p>
				<p className={s.item_value}>{cart_summ} &#36;</p>
			</li>
			<li className={s.order_item}>
				<p className={s.item_title}>Discount</p>
				<p className={s.item_value}>{discount} &#36;</p>
			</li>
			<li className={s.order_item}>
				<p className={s.item_title}>Delivery</p>
				<p className={s.item_value}>{delivery ? `${delivery} $` : "free"}</p>
			</li>
		</ul>
	)
}
