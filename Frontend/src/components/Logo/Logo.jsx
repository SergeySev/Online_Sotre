import { HashLink } from 'react-router-hash-link';
import logo from './assets/logo.png'
import s from './Logo.module.css'

export default function Logo() {

	const scrollWithOffset = (el) => {
		const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
		const yOffset = -96;
		window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
	}

	return (
		<HashLink
			className={s.logo}
			smooth
			to="/Online_Store/#home"
			scroll={el => scrollWithOffset(el)}>
			<img src={logo} alt="logo" />
		</HashLink>
	)
}
