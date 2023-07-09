import s from './CartTitlesList.module.css'

export function CartTitlesList() {
	return (
		<ul className={s.cart_titles}>
			<li>Product name</li>
			<li>Price</li>
			<li>Quantity</li>
			<li>Total</li>
		</ul>
	)
}
