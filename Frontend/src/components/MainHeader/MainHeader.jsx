import CatalogBurger from '../CatalogBurger/CatalogBurger'
import MainMenu from '../MainMenu/MainMenu'
import SocialIconList from '../SocialIconList/SocialIconList'
import Search from '../Search/Search'
import s from './MainHeader.module.css'

export default function MainHeader() {

	return (
		<div className={s.main_header}>
			<CatalogBurger />
			<MainMenu />
			<SocialIconList />
			<Search />
		</div >
	)
}
