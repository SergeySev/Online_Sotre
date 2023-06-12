import './App.css';
import Footer from './components/Footer/Footer';
import MainHeader from './components/MainHeader/MainHeader';
import TopHeader from './components/TopHeader/TopHeader';
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage';
import SignWindow from './components/SIgnWindow/SignWindow';
import { useState } from 'react';
import MainCategoriesPage from './pages/MainCategoriesPage/MainCategoriesPage';
import SubCategoryPage from './pages/SubCategoryPage/SubCategoryPage';

function App() {
  const [active, setActive] = useState(false);
  return (
    <div>
      {/* <SignWindow active={active} setActive={setActive} /> */}
      <TopHeader active={active} setActive={setActive} />
      <MainHeader />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/catalog/' element={<MainCategoriesPage />} />
        <Route path='/catalog/:id' element={<MainCategoriesPage />} />
        <Route path='/catalog/:id/:id' element={<SubCategoryPage />} />
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
