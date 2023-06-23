import { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import s from './Burger.module.css'

export default function Burger() {
	const [burgerActive, setBurgerActive] = useState(false);

	return (
		<div
			className={`${s.burger_menu} ${s[burgerActive ? 'active' : ''] || ''}`}
			onClick={() => setBurgerActive(!burgerActive)}>
			<span></span>
			<span></span>
			<span></span>
			<AiOutlineClose/>
		</div>
	)
}
