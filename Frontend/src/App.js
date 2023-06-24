import { Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import MainCategoriesPage from './pages/MainCategoriesPage/MainCategoriesPage';
import SubCategoryPage from './pages/SubCategoryPage/SubCategoryPage';
import Footer from './components/Footer/Footer';
import './App.css';
import { BurgerContext } from './context/burgerContext';
import ContentMenu from './components/ContentMenu/ContentMenu';

function App() {
	// const [active, setActive] = useState(false);
	const [burgerActive, setBurgerActive] = useState(false);

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
			</Routes>
			<Footer />
		</div>
		</BurgerContext.Provider>
	);
}

export default App;
