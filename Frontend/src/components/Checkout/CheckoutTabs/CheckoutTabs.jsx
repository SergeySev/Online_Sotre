import { useState } from 'react'
import { Button } from '../../../UI'
import { CheckoutTitleList, TabData, TabDelivery, TabPayment } from '../';
import s from './CheckoutTabs.module.css'

export function CheckoutTabs() {

	let [activeTab, setActiveTab] = useState(1);

	const selectTab = (e) => {
		e.preventDefault();
		setActiveTab(++activeTab);
	}

	const confirmOrder = (e) => {
		e.preventDefault();
		console.log('confirmOrder');
	}

	return (
		<div className={s.checkout_content}>
			<CheckoutTitleList activeTab={activeTab} setActiveTab={setActiveTab} />
			<form className={s.checkout_form}>
				{activeTab === 1 ? <TabData /> :
					activeTab === 2 ? <TabDelivery /> :
						<TabPayment />}
				<Button
					text={activeTab === 3 ? 'confirm the order' : 'next'}
					content={activeTab !== 3 ? 'checkout' : 'confirmOrder'}
					onClick={activeTab !== 3 ? selectTab : confirmOrder}
				/>
			</form>
		</div>
	)
}
