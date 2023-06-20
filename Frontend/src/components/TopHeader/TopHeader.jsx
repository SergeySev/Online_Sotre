import React, { useEffect, useState } from 'react'
import { HashLink } from 'react-router-hash-link';
import Logo from '../Logo/Logo'
import TopMenu from '../TopMenu/TopMenu';
import CatalogBurger from '../CatalogBurger/CatalogBurger';
import Search from '../Search/Search';
import s from './TopHeader.module.css'

// export default function TopHeader({ active, setActive }) {
export default function TopHeader() {

	const total_summ = 100;

	const [isSticky, setIsSticky] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY;
			if (scrollPosition > 96) {
				setIsSticky(true);
			} else {
				setIsSticky(false);
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const scrollWithOffset = (el) => {
		const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
		const yOffset = -96;
		window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
	}

	return (
		<div className={`${s.top_header} ${s[isSticky ? 'sticky' : ''] || ''}`}>
			<div className='container'>

				<div className={s.top_header_inner}>

					<div className={s.left_part}>

						<HashLink smooth to="/#header" scroll={el => scrollWithOffset(el)}>
							<Logo />
						</HashLink>

						{!isSticky ?
							<>
								<p className={s.hours}>Working hours: 10:00 - 20:00</p>
								<div className={s.phones}>
									<p className={s.phone}>+7 495 120-32-14</p>
									<p className={s.order_call}>Order call</p>
								</div>
							</> :
							<>
								<CatalogBurger />
								<Search />
							</>
						}

					</div>

					<TopMenu />

					<div className={s.total}>
						<p className={s.total_text}>Total sum</p>
						<p className={s.total_summ}>
							{total_summ}
							<span>&#x24;</span>
						</p>
					</div>

					<div className={s.burger_menu}>

					</div>
				</div>

			</div>

		</div>
	)
}
