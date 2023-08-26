import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { main_menu_list } from '../../data/data'
import { Logo, SocialIconList } from '../'
import s from './Footer.module.css'
import { useEffect } from 'react'
import { fetch_main_categories } from '../../requests/requests'


export function Footer() {

	const dispatch = useDispatch()
	const catalog_list = useSelector(store => store.categories)

	useEffect(() => {
		dispatch(fetch_main_categories())
	}, [])

	return (
		<footer className={s.footer}>
			<div className='container'>
				<div className={s.footer_inner}>
					<ul className={s.catalog_list}>
						{catalog_list.map(elem =>
							<li className={s.item} key={elem.id}>
								<NavLink to={elem.link} >{elem.title}</NavLink>
							</li>)
						}
					</ul>
					<ul className={s.menu_list}>
						{main_menu_list.map(elem =>
							<li className={s.item} key={elem.id}>
								<NavLink to={elem.link}>{elem.title}</NavLink>
							</li>)}
					</ul>
					<div className={s.contacts_list}>
						<Logo />
						<ul className={s.phones}>
							<li><p>+7 495 120-32-14</p></li>
							<li><p>+7 495 120-32-15</p></li>
						</ul>
						<SocialIconList />
						<ul className={s.privacy}>
							<li><p>User declaration</p></li>
							<li><p>«Copyright © Inst_Room 2023»</p></li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	)
}
