import { HashLink } from 'react-router-hash-link';
import { useContext } from 'react'
import { BurgerContext } from '../../context/burgerContext'
import logo from './assets/logo.png'
import s from './Logo.module.css'

export function Logo({ content }) {
	const context = useContext(BurgerContext);

	const scrollWithOffset = (el) => {
		const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
		const yOffset = -96;
		window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
	}

	return (
		<HashLink
			className={`${s.logo} ${s[content] || ''}`}
			smooth
			to="/Online_Store/#home"
			scroll={el => scrollWithOffset(el)}
			onClick={() => context.setBurgerActive(false)}>
			<img src={logo} alt="logo" />
		</HashLink>
	)
}
