import { CatalogBurger, MainMenu, SocialIconList, Search } from '../../'
import s from './HeaderBottom.module.css'

export function HeaderBottom() {
	return (
		<div className={s.header_bottom}>
			<CatalogBurger />
			<MainMenu />
			<SocialIconList content='header' />
			<Search />
		</div >
	)
}
