import React from 'react'

// import burger from './assets/burger.png'
// import search from './assets/search.png'
import SocialIconList from '../SocialIconList/SocialIconList'
import CatalogBurger from '../CatalogBurger/CatalogBurger'
import Search from '../Search/Search'
import s from './MainHeader.module.css'
import MainMenu from '../MainMenu/MainMenu'


export default function MainHeader() {



	return (
		<div className={s.main_header}>
			<div className='container'>
				<div className={s.main_header_inner}>
					<CatalogBurger />
					{/* <NavLink to='/catalog/'>
            <div className={s.burger}>
              <img src={burger} alt="burger_icon" />
              <p className={s.burger_title}>Products catalog</p>
            </div>
          </NavLink> */}
					<MainMenu />
					<SocialIconList />
					<Search />

				</div>
			</div>
		</div>
	)
}
