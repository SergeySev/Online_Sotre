import { useContext } from 'react'
import { BurgerContext } from '../../context/burgerContext'
import { AiOutlineClose } from 'react-icons/ai';
import s from './Burger.module.css'

export function Burger() {

	const { burgerActive, setBurgerActive } = useContext(BurgerContext);

	return (
		<div
			className={`${s.burger_menu} ${s[burgerActive ? 'active' : ''] || ''}`}
			onClick={() => setBurgerActive(!burgerActive)}>
			<span></span>
			<span></span>
			<span></span>
			<AiOutlineClose />
		</div>
	)
}
