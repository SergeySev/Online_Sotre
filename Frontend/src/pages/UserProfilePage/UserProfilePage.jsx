import { useState } from 'react';
import { Breadcrumbs, OffersAside, UserOrdersHistory, PrivateInfo } from '../../components';
import s from './UserProfilePage.module.css'

export function UserProfilePage() {
	const breadcrumbsItems = [
		{ text: 'Home /', link: '/Online_Store' },
		{ text: 'Personal Profile', link: '/user' },
	];

	const [user_content, setUserContent] = useState('data');

	return (
		<section className={s.profile_section}>
			<div className='container'>
				<Breadcrumbs items={breadcrumbsItems} />
				<div className={s.profile_wrapper}>
					<h1 className='title'>Personal Profile</h1>
					<div className={s.page_container}>
						<aside>
							<ul className={s.tabs_container}>
								<li className={s.tab_item} onClick={() => setUserContent('orders')}>
									<p>History of orders</p>
								</li>
								<li className={s.tab_item} onClick={() => setUserContent('data')}>
									<p>Personal information</p>
								</li>
							</ul>
							<OffersAside />
						</aside>
						{user_content === 'data' ? <PrivateInfo /> : <UserOrdersHistory />}
					</div>
				</div>
			</div>
		</section>
	)
}
