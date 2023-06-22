import { Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import MainCategoriesPage from './pages/MainCategoriesPage/MainCategoriesPage';
import SubCategoryPage from './pages/SubCategoryPage/SubCategoryPage';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
	// const [active, setActive] = useState(false);

	return (
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
	);
}

export default App;
