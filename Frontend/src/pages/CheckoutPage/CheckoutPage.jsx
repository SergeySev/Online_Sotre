import { Breadcrumbs, CheckoutTabs, CheckoutOrder } from '../../components';
import s from './CheckoutPage.module.css'

export function CheckoutPage() {
	const breadcrumbsItems = [
		{ text: 'Home /', link: '/Online_Store' },
		{ text: 'Checkout', link: '/checkout' },
	];

	return (
		<section className={s.checkout_page}>
			<div className="container">
				<Breadcrumbs items={breadcrumbsItems} />
				<h1 className='title'>Checkout</h1>
				<div className={s.checkout_content}>
					<CheckoutTabs />
					<CheckoutOrder />
				</div>
			</div>
		</section >
	)
}
