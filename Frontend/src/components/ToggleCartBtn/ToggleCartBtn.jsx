import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { add_to_cart, remove_from_cart } from '../../store/reducers/cartSlice';
import cart from './assets/shopping-cart.png';
import checked_cart from './assets/check-circle.png';
import checked_cart_colored from './assets/check-circle_colored.png';
import s from './ToggleCartBtn.module.css'

export function ToggleCartBtn({ product, bottom, content }) {

	const [isActive, setActive] = useState(false);

	const dispatch = useDispatch();

	const toggleHand = () => {
		if (isActive) {
			setActive(false);
			const data = {
				product,
				count: 1
			}
			dispatch(remove_from_cart(data))
		} else {
			setActive(true);
			dispatch(add_to_cart(product))
		}
	}

	const image = isActive ? (content === "comparison" ? checked_cart_colored : checked_cart) : cart;

	return (
		<button
			className={`
			${s[bottom ? 'cart_btn_bottom' : 'cart_btn_top'] || 'cart_btn_bottom'} 
			${s[isActive ? 'active' : ''] || ''}
			${s[content ? content : ''] || ''}
			`}
			onClick={toggleHand}>
			<img src={image} />
		</button>
	)
}
