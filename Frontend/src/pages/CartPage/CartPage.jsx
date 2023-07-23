import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Breadcrumbs, CartList, CartTitlesList, CartTotalInfo } from '../../components';
import { Button } from '../../UI';
import s from './CartPage.module.css'

export function CartPage() {

	const breadcrumbsItems = [
		{ text: 'Home /', link: '/Online_Store' },
		{ text: 'Shopping cart', link: '/cart' },
	];

	const products_list = useSelector(store => store.cart.cart_list)

	return (
		<section className={s.cart_page}>
			<div className="container">
				<Breadcrumbs items={breadcrumbsItems} />
				<div className={s.cart_top}>
					<h1 className='title'>Shopping cart</h1>
					<NavLink to='/Online_Store/#home'>
						<Button text='continue shopping' content="to_shop" />
					</NavLink>
				</div>
				{!products_list?.length ?
					<p className={s.cart_empty}>You cart is empty...</p> :
					<>
						<CartTitlesList />
						<CartList products={products_list} />
						<CartTotalInfo />
					</>
				}
			</div>
		</section >
	)
}
