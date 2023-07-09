import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Breadcrumbs, CartList, CartTotalInfo } from '../../components';
import s from './CartPage.module.css'
import { Button } from '../../UI';

export function CartPage() {

	const breadcrumbsItems = [
		{ text: 'Home /', link: '/' },
		{ text: 'Shopping cart', link: '/cart' },
	];

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const products_list = useSelector(store => store.cart.cart_list)
	if (!products_list) {
		navigate('/Online_Store/#home')
	}

	const handleClick = () => {
		navigate('/Online_Store/#home')
	}

	return (
		<section className={s.cart_page}>
			<div className="container">
				<Breadcrumbs items={breadcrumbsItems} />
				<div className={s.cart_top}>
					<h1 className='title'>Shopping cart</h1>
					<Button text='continue shopping' onclick={handleClick} content="to_shop" />
				</div>
				<ul className={s.cart_titles}>
					<li>Product name</li>
					<li>Price</li>
					<li>Quantity</li>
					<li>Total</li>
				</ul>
				<CartList products={products_list} />
				<CartTotalInfo />
			</div>
		</section >
	)
}
