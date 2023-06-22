import React, { useEffect, useState } from 'react'
import Logo from '../Logo/Logo'
import CatalogBurger from '../CatalogBurger/CatalogBurger'
import Search from '../Search/Search'
import TopMenu from '../TopMenu/TopMenu';
import TotalSum from '../CartSum/CartSum';
import Burger from '../Burger/Burger';
import s from './HeaderScroll.module.css'

export default function HeaderScroll() {

	const [isSticky, setIsSticky] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY;
			if (scrollPosition > 184) {
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

	return (
		<div className={`${s.header_scroll} ${s[isSticky ? "fixed" : ''] || ''}`}>
			<div className={s.header_scroll_wrapper}>
				<div className="container">
					<div className={s.header_scroll_content} >
						<Logo />
						<CatalogBurger isBlocked='scroll' />
						<Search />
						<TopMenu />
						<TotalSum />
						<Burger />
					</div>
				</div>
			</div>
		</div>
	)
}
