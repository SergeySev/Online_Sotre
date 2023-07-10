import { useEffect, useState } from 'react'
import { Button } from '../../../UI'
import { CheckoutTitleList, TabData, TabDelivery, TabPayment } from '../';
import s from './CheckoutTabs.module.css'
import { useDispatch } from 'react-redux';
import { customer_data } from '../../../store/reducers/orderSlice';

export function CheckoutTabs() {

	let [activeTab, setActiveTab] = useState(1);
	// let [userData, setUserData] = useState({});

	const dispatch = useDispatch();

	// const decrTab = (data) => {
	// console.log("🚀 ~ file: CheckoutTabs.jsx:16 ~ decrTab ~ data:", data)
	// setActiveTab(--activeTab);
	// dispatch(customer_data(data));
	// }

	const error = () => {
		console.log("error");
	}



	// const saveData = (data) => {
	// 	console.log("🚀 ~ file: CheckoutTabs.jsx:31 ~ saveData ~ data:", data)
	// 	setActiveTab(++activeTab);
	// 	setUserData(data);
	// }

	// useEffect(() => {
	// return dispatch(customer_data(userData));
	// }, [activeTab])

	return (
		<div className={s.checkout_content} >
			<CheckoutTitleList activeTab={activeTab} setActiveTab={setActiveTab} error={error} />
			{/* <form className={s.checkout_form} onSubmit={confirmOrder}> */}
			{activeTab === 1 ? <TabData activeTab={activeTab} setActiveTab={setActiveTab} /> :
				activeTab === 2 ? <TabDelivery activeTab={activeTab} setActiveTab={setActiveTab} /> :
					<TabPayment activeTab={activeTab} setActiveTab={setActiveTab} />}
			{/* <Button
					text={activeTab === 3 ? 'confirm the order' : 'next'}
					content={activeTab !== 3 ? 'checkout' : 'confirmOrder'}
					onSubmit={confirmOrder}
					// onClick={activeTab !== 3 ? saveData : { confirmOrder }}
				/> */}
			{/* </form> */}
		</div>
	)
}
