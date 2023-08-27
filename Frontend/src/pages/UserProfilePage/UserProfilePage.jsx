import { useState } from "react";
import {
	Breadcrumbs,
	OffersAside,
	UserOrdersHistory,
	PrivateInfo,
	BurgerAside,
} from "../../components";

import s from "./UserProfilePage.module.css";

export function UserProfilePage() {
	const [isAsideOpen, setIsAsideOpen] = useState(false);
	const [user_content, setUserContent] = useState("data");

	const breadcrumbsItems = [
		{ text: "Home /", link: "/Online_Store" },
		{ text: "Personal Profile", link: "/user" },
	];

	const handleClick = (arg) => {
		setUserContent(arg);
		if (isAsideOpen) setIsAsideOpen(!isAsideOpen);
	};

	return (
		<section
			className={`${s.profile_section} ${s[isAsideOpen ? "open" : ""] || ""}`}
		>
			<div className="container">
				<Breadcrumbs items={breadcrumbsItems} />
				<h1 className="title">Personal Profile</h1>
				<div className={s.profile_wrapper}>
					<BurgerAside
						isAsideOpen={isAsideOpen}
						setIsAsideOpen={setIsAsideOpen}
					/>
					<div className={s.page_container}>
						<aside
							className={`${s.profile_aside} ${
								s[isAsideOpen ? "open" : ""] || ""
							}`}
						>
							<ul className={s.tabs_container}>
								<li
									className={s.tab_item}
									onClick={() => handleClick("orders")}
								>
									<p>History of orders</p>
								</li>
								<li className={s.tab_item} onClick={() => handleClick("data")}>
									<p>Personal information</p>
								</li>
							</ul>
							<OffersAside />
						</aside>
						<div className={s.profile_content}>
							{user_content === "data" ? (
								<PrivateInfo />
							) : (
								<UserOrdersHistory />
							)}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
