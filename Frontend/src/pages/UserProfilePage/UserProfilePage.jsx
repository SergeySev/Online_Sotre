import { useState } from 'react';
import { Breadcrumbs, OffersAside, UserOrdersHistory, PrivateInfo, CatalogBurger } from '../../components';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';

import s from './UserProfilePage.module.css'

export function UserProfilePage() {
	const breadcrumbsItems = [
		{ text: 'Home /', link: '/Online_Store' },
		{ text: 'Personal Profile', link: '/user' },
	];

	const [isAssideOpen, setIsAssideOpen] = useState(false);
	const [user_content, setUserContent] = useState('data');

	const handleClick = (arg) => {
		setUserContent(arg);
		setIsAssideOpen(!isAssideOpen)
	}

	return (
		<section className={`${s.profile_section} ${s[isAssideOpen ? "open" : ''] || ''}`}>
			<div className='container'>
				<Breadcrumbs items={breadcrumbsItems} />
				<div className={s.profile_wrapper}>
					<h1 className='title'>Personal Profile</h1>
					<div
						className={`${s.menu_burger} ${s[isAssideOpen ? "open" : ''] || ''}`}
						onClick={() => setIsAssideOpen(!isAssideOpen)}>
						{!isAssideOpen ? <HiOutlineMenuAlt2 /> : <AiOutlineClose />}
					</div>
					<div className={s.page_container}>
						<aside className={`${s.profile_aside} ${s[isAssideOpen ? "open" : ''] || ''}`}>
							<ul className={s.tabs_container}>
								<li className={s.tab_item} onClick={() => handleClick('orders')}>
									<p>History of orders</p>
								</li>
								<li className={s.tab_item} onClick={() => handleClick('data')}>
									<p>Personal information</p>
								</li>
							</ul>
							<OffersAside />
						</aside>
						<div className={s.profile_content}>
							{user_content === 'data' ? <PrivateInfo /> : <UserOrdersHistory />}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
