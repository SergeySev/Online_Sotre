import { useDispatch, useSelector } from 'react-redux'
import s from './TabData.module.css'
import { Button } from '../../../UI';
import { customer_data } from '../../../store/reducers/orderSlice';

export function TabData({ activeTab, setActiveTab }) {
	const { last_name, first_name, phone, email, } = { ...useSelector(store => store.order) };

	const dispatch = useDispatch()

	const saveData = (e) => {
		e.preventDefault();
		const { first_name, last_name, phone, email } = e.target
		const obj = {
			first_name: first_name?.value,
			last_name: last_name?.value,
			phone: phone?.value,
			email: email?.value
		}
		if (activeTab < 3) {
			setActiveTab(++activeTab)
		}
		dispatch(customer_data(obj));
	}


	return (
		<form className={s.checkout_form} onSubmit={saveData}>
			<ul className={s.data_list}>
				<li className={s.data_item}>
					<label>
						Last name
						<input type="text" name="last_name" placeholder={last_name} />
					</label>
				</li>
				<li className={s.data_item}>
					<label>
						First name
						<input type="text" name="first_name" placeholder={first_name} />
					</label>
				</li>
				<li className={s.data_item}>
					<label>
						Phone number
						<input type="phone" name="phone" placeholder={phone} />
					</label>
				</li>
				<li className={s.data_item}>
					<label>
						e-mail
						<input type="email" name="email" placeholder={email} />
					</label>
				</li>
			</ul>
			<Button
				text='next'
				content='checkout'
			/>
		</form>
	)
}
