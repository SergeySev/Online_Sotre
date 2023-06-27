import { useState } from 'react';
import cart from './assets/shopping-cart.png';
import checked_cart from './assets/check-circle.png';
import s from './AddToCartBtn.module.css'
import { set } from 'react-hook-form';

export default function AddToCartBtn({ product_id }) {
	const [isActive, setActive] = useState(false);
	const handleButton = (id) => {
		console.log(id);
		setActive(true);
		setTimeout(() => {
			setActive(false)
		}, 500);
	}
	const image = isActive ? checked_cart : cart;
	return (
		<button className={`${s.cart_btn} ${s[isActive ? 'active' : ''] || ''}`}
			onClick={() => handleButton(product_id)}>
			<img src={image} />
		</button>
	)
}
