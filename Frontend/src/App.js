import { Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { BurgerContext } from './context/burgerContext';
import { PopUpContext } from './context/popUpContext';
import { Header, Footer, PopUpContainer, PopUpContent, useAuth } from './components';
import { CartPage, CheckoutPage, ComparisonPage, FavoriteProductsPage, HomePage, MainCategoriesPage, SubCategoryPage, UserProfilePage } from './pages';
import './App.css';
import BrandsPage from './pages/BrandsPage/BrandsPage';

function App() {
	// const [active, setActive] = useState(false);
	const [burgerActive, setBurgerActive] = useState(false);
	const [popupActive, setPopupActive] = useState(false);
	const [title, setTitle] = useState('');
	const { isAuth } = useAuth();

	useEffect(() => {
		const handleResize = () => {
			const windowWidth = window.innerWidth;
			if (windowWidth > 762) setBurgerActive(false);
		};

		window.addEventListener('resize', handleResize);

		handleResize();
		return () => {
			window.removeEventListener('resize', handleResize);
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

		document.addEventListener('wheel', handleScroll, options);
		document.addEventListener('touchmove', handleScroll, options);

		return () => {
			document.removeEventListener('wheel', handleScroll);
			document.removeEventListener('touchmove', handleScroll);
		};
	}, [burgerActive]);

	return (
		<PopUpContext.Provider
			value={{
				popupActive,
				setPopupActive,
				title,
				setTitle
			}}>
			<BurgerContext.Provider
				value={{
					burgerActive,
					setBurgerActive
				}}>
				<div className='app'>
					<Header />
					<Routes>
						<Route path='/Online_Store' element={<HomePage />} />
						<Route path='/catalog/' element={<MainCategoriesPage />} />
						<Route path='/catalog/:id' element={<MainCategoriesPage />} />
						<Route path='/catalog/:id/:id' element={<SubCategoryPage />} />
						<Route path='/favorite' element={<FavoriteProductsPage />} />
						<Route path='/comparison' element={<ComparisonPage />} />
						<Route path='/cart' element={<CartPage />} />
						<Route path='/brands' element={<BrandsPage />} />
						<Route path='/checkout' element={<CheckoutPage />} />
						<Route path='/user' element={<UserProfilePage />} />
					</Routes>
					<Footer />
					<PopUpContainer
						popup_active={popupActive}
						setPopupActive={setPopupActive}
						content={
							< PopUpContent
								active={popupActive}
								setActive={setPopupActive}
								popup={title === "avatar" ?
									(isAuth ? 'profile' : 'sign') :
									"phone"} />
						}
					/>
				</div>
			</BurgerContext.Provider>
		</PopUpContext.Provider>
	);
}

export default App;
