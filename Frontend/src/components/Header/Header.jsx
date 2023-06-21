
import TopHeader from '../TopHeader/TopHeader';
import MainHeader from '../MainHeader/MainHeader';
import s from './Header.module.css'
import { useEffect, useState } from 'react';
import Logo from '../Logo/Logo'
import CatalogBurger from '../CatalogBurger/CatalogBurger'
import Search from '../Search/Search'
import TopMenu from '../TopMenu/TopMenu';
import TotalSum from '../TotalSum/TotalSum';

export default function Header() {

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
		<>
			<header className={s.header} id="home">
				<div className="container">
					{/* <div className={s.header_content}> */}
					<TopHeader />
					<MainHeader />
					{/* </div> */}
				</div>
			</header>
			<div className={`${s.header_sticky} ${s[isSticky ? "fixed" : ''] || ''}`}>
				<div className="container">
					<div className={`${s.header_content_sticky} ${s[isSticky ? "fixed" : ''] || ''}`}>
						<Logo />
						<CatalogBurger />
						<Search />
						<TopMenu />
						<TotalSum />
					</div>
				</div>
			</div>
		</>
	)
}
