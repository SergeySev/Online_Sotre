import { CartItem } from '../..'
import s from './CartList.module.css'

export function CartList({ products }) {

	return (
		<ul className={s.cart_list}>
			{products.map((product, index) => <CartItem key={index} {...product} />)}
		</ul>
	)
}
