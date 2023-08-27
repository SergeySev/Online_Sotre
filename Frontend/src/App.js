import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { BurgerContext } from "./context/burgerContext";
import { PopUpContext } from "./context/popUpContext";
import { Header, Footer, PopUpContainer, PopUpContent } from "./components";
import {
	CartPage,
	BrandsPage,
	BrandItemPage,
	CheckoutPage,
	ComparisonPage,
	FavoriteProductsPage,
	HomePage,
	MainCategoriesPage,
	NotFoundPage,
	SubCategoryPage,
	UserProfilePage,
} from "./pages";
import "./App.css";
import NewsArticlePage from "./pages/NewsArticlePage/NewsArticlePage";
import { fetch_check_token } from "./requests/requests";
import { set_user } from "./store/reducers/userSlice";
import { useDispatch } from "react-redux";

function App() {
	const [burgerActive, setBurgerActive] = useState(false);
	const [popupActive, setPopupActive] = useState(false);
	const [title, setTitle] = useState("");
	const dispatch = useDispatch();

	useEffect(() => {
		const saved_token = sessionStorage.getItem("user_token");
		if (saved_token) checkToken(saved_token);
	}, []);

	const checkToken = async (token) => {
		const resp = await fetch_check_token({ token });
		dispatch(set_user(resp));
	};

	useEffect(() => {
		const handleResize = () => {
			const windowWidth = window.innerWidth;
			if (windowWidth > 762) setBurgerActive(false);
		};

		window.addEventListener("resize", handleResize);

		handleResize();
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	useEffect(() => {
		const handleScroll = (event) => {
			if (burgerActive) {
				event.preventDefault();
				event.stopPropagation();
			}
		};

		const options = { passive: false };

		document.addEventListener("wheel", handleScroll, options);
		document.addEventListener("touchmove", handleScroll, options);

		return () => {
			document.removeEventListener("wheel", handleScroll);
			document.removeEventListener("touchmove", handleScroll);
		};
	}, [burgerActive]);

	return (
		<PopUpContext.Provider
			value={{
				popupActive,
				setPopupActive,
				title,
				setTitle,
			}}
		>
			<BurgerContext.Provider
				value={{
					burgerActive,
					setBurgerActive,
				}}
			>
				<div className="app">
					<Header />
					<Routes>
						<Route path="/Online_Store" element={<HomePage />} />
						<Route path="/catalog/" element={<MainCategoriesPage />} />
						<Route path="/catalog/:id" element={<MainCategoriesPage />} />
						<Route path="/catalog/:id/:id" element={<SubCategoryPage />} />
						<Route path="/favorite" element={<FavoriteProductsPage />} />
						<Route path="/comparison" element={<ComparisonPage />} />
						<Route path="/cart" element={<CartPage />} />
						<Route path="/brands" element={<BrandsPage />} />
						<Route path="/brands/:brand" element={<BrandItemPage />} />
						<Route path="/news/:article" element={<NewsArticlePage />} />
						<Route path="/checkout" element={<CheckoutPage />} />
						<Route path="/user" element={<UserProfilePage />} />
						<Route path="*" element={<NotFoundPage />} />
					</Routes>
					<Footer />
					<PopUpContainer
						popup_active={popupActive}
						setPopupActive={setPopupActive}
						content={
							<PopUpContent
								active={popupActive}
								setActive={setPopupActive}
								popup={title}
							/>
						}
					/>
				</div>
			</BurgerContext.Provider>
		</PopUpContext.Provider>
	);
}

export default App;
