import { HeaderScroll, HeaderTop, HeaderBottom } from './';
import s from './Header.module.css'

export function Header() {

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
