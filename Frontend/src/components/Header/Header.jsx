import { useContext, useState } from 'react';
import {BurgerContext} from '../../context/burgerContext'
import HeaderTop from '../HeaderTop/HeaderTop';
import HeaderBottom from '../HeaderBottom/HeaderBottom';
import HeaderScroll from '../HeaderScroll/HeaderScroll';
import s from './Header.module.css'

export default function Header() {

	const {burgerActive, setBurgerActive}  =  useContext(BurgerContext);
	return (
		<>
			<header className={s.header} id="home">
				<div className="container">
					<HeaderTop />
					<HeaderBottom />
				</div>
			</header>
			<HeaderScroll />
		</>
	)
}
