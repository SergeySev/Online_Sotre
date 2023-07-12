import { useSelector } from 'react-redux';
import { Button } from '../../../UI';
import s from './TabPayment.module.css'

export const TabPayment = ({ activeTab, setActiveTab }) => {
	const order = { ...useSelector(store => store.order) }
	// console.log("🚀 ~ file: TabPayment.jsx:6 ~ TabPayment ~ order:", order)
	// const { last_name, first_name, phone, email, } = { ...useSelector(store => store.order) };

	const saveData = (e) => {
		e.preventDefault();
		// const { first_name, last_name, phone, email } = e.target
		const obj = {
			// first_name: first_name?.value,
			// last_name: last_name?.value,
			// phone: phone?.value,
			// email: email?.value
		}

		// dispatch(customer_data(userData));
	}

	return (
		<form className={s.checkout_form} onSubmit={saveData}>
			<h2 className={s.delivery_title}>
				Choose the payment option that suits you:
			</h2>
			<Button
				text='next'
				content='confirmOrder'
			/>
			<p>
				By&nbsp;clicking on&nbsp;the button you agree to&nbsp;the processing of&nbsp;your personal data
			</p>
		</form>
	)
}
