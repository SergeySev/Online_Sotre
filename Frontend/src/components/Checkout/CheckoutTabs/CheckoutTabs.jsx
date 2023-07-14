import { useState } from 'react'
import { CheckoutTitleList, TabData, TabDelivery, TabPayment } from '../';
import s from './CheckoutTabs.module.css'

export function CheckoutTabs() {
	let [activeTab, setActiveTab] = useState(1);

	const error = () => {
		console.log("error");
	}

	return (
		<div className={s.checkout_content} >
			<CheckoutTitleList
				activeTab={activeTab}
				setActiveTab={setActiveTab}
				error={error} />

			{activeTab === 1 ?
				<TabData activeTab={activeTab} setActiveTab={setActiveTab} /> :
				activeTab === 2 ?
					<TabDelivery activeTab={activeTab} setActiveTab={setActiveTab} /> :
					<TabPayment activeTab={activeTab} setActiveTab={setActiveTab} />}

		</div>
	)
}
