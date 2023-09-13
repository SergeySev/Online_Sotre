import { useEffect, useState } from "react";
import { CatalogBurger, MenuNavigation, SocialIconList, Search } from "../../";
import s from "./HeaderBottom.module.css";

export function HeaderBottom() {
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
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div className={s.header_bottom}>
			{!isSticky ? (
				<>
					<CatalogBurger />
					<MenuNavigation />
					<SocialIconList content="header" />
					<Search isBlocked="bottom" />
				</>
			) : (
				""
			)}
		</div>
	);
}
