import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { add_to_cart, remove_from_cart } from '../../store/reducers/cartSlice';
import cart from './assets/shopping-cart.png';
import checked_cart from './assets/check-circle.png';
import s from './ToggleCartBtn.module.css'

export function ToggleCartBtn({ product, bottom }) {

	console.log(bottom)
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

	const image = isActive ? checked_cart : cart;
	return (
		<button
			className={`${s[bottom ? 'cart_btn_bottom' : 'cart_btn_top'] || 'cart_btn_bottom'} ${s[isActive ? 'active' : ''] || ''}`}
			onClick={toggleHand}>
			<img src={image} />
		</button>
	)
}
