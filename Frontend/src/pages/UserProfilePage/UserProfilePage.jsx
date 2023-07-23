import { useDispatch } from 'react-redux';
import { Button } from '../../UI';
import { Breadcrumbs, OffersAside, OrdersHistory, PrivateInfo } from '../../components';
import { remove_user } from '../../store/reducers/userSlice';
import { useNavigate } from 'react-router-dom';
import s from './UserProfilePage.module.css'
import { useState } from 'react';

export function UserProfilePage() {
	const breadcrumbsItems = [
		{ text: 'Home /', link: '/Online_Store' },
		{ text: 'Personal Profile', link: '/user' },
	];

	const [user_content, setUserContent] = useState('data');

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleReAuth = () => {
		dispatch(remove_user());
		navigate('/Online_Store')
	}

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
						{user_content === 'data' ? <PrivateInfo /> : <OrdersHistory />}
					</div>
					<Button text='Log out' content='about' onClick={handleReAuth} />
				</div>
			</div>
		</section>
	)
}
