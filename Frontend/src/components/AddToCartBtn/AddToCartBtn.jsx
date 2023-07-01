import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { add_to_cart } from '../../store/reducers/cartSlice';
import cart from './assets/shopping-cart.png';
import checked_cart from './assets/check-circle.png';
import s from './AddToCartBtn.module.css'

export function AddToCartBtn({ product }) {
	const [isActive, setActive] = useState(false);

	const dispatch = useDispatch();

	const addToCart = () => {
		setActive(true);
		setTimeout(() => {
			setActive(false)
		}, 500);
		dispatch(add_to_cart(product))
	}

	const image = isActive ? checked_cart : cart;
	return (
		<button
			className={`${s.cart_btn} ${s[isActive ? 'active' : ''] || ''}`}
			onClick={addToCart}>
			<img src={image} />
		</button>
	)
}
