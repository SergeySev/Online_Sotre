import { useEffect, useState } from 'react'
import { Logo, TopMenu, CartSum, Burger, CatalogBurger, Search } from '../../'
import s from './HeaderScroll.module.css'

export function HeaderScroll() {

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
						<Logo content="header" />
						<CatalogBurger isBlocked='scroll' />
						<Search isBlocked='scroll' />
						<TopMenu />
						<CartSum />
						<Burger />
					</div>
				</div>
			</div>
		</div>
	)
}
