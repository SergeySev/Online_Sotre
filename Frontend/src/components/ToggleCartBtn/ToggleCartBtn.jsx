import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { add_to_cart, remove_from_cart } from '../../store/reducers/cartSlice';
import cart from './assets/shopping-cart.png';
import checked_cart from './assets/check-circle.png';
import s from './ToggleCartBtn.module.css'

export function ToggleCartBtn({ product }) {
	const [isActive, setActive] = useState(false);

	const dispatch = useDispatch();

	const toggleHand = () => {
		if (isActive) {
			setActive(false);
			dispatch(remove_from_cart(product))
		} else {
			setActive(true);
			dispatch(add_to_cart(product))
		}
	}

	const image = isActive ? checked_cart : cart;
	return (
		<button
			className={`${s.cart_btn} ${s[isActive ? 'active' : ''] || ''}`}
			onClick={toggleHand}>
			<img src={image} />
		</button>
	)
}
