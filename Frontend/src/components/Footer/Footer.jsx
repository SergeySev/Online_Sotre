import React from 'react'
import Logo from '../Logo/Logo'
import SocialIconList from '../SocialIconList/SocialIconList'
import s from './Footer.module.css'
// import { catalog_list } from '../../data/data'
import { main_menu_list } from '../../data/data'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'


export default function Footer() {

  const catalog_list = useSelector(store => store.categories)

  return (
    <div className={s.footer}>
      <div className='container'>
        <div className={s.footer_inner}>
          <div className={s.catalog_list}>
            {catalog_list.map(elem => <NavLink to={elem.link} key={elem.id}>{elem.title}</NavLink>)}
          </div>
          <div className={s.main_menu}>
            {main_menu_list.map(elem => <NavLink to={elem.link} key={elem.id}>{elem.title}</NavLink>)}
          </div>
          <div className={s.right_part}>
            <Logo />
            <div className={s.phones}>
              <p>+7 495 120-32-14</p>
              <p>+7 495 120-32-15</p>
            </div>
            <SocialIconList />
            <div className={s.privacy}>
              <p>User declaration</p>
              <p>«Copyright © Inst_Room 2023»</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
