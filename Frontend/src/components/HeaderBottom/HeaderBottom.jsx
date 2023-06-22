import CatalogBurger from '../CatalogBurger/CatalogBurger'
import MainMenu from '../MainMenu/MainMenu'
import SocialIconList from '../SocialIconList/SocialIconList'
import Search from '../Search/Search'
import s from './HeaderBottom.module.css'

export default function HeaderBottom() {

	return (
		<div className={s.header_bottom}>
			<CatalogBurger />
			<MainMenu />
			<SocialIconList />
			<Search />
		</div >
	)
}
