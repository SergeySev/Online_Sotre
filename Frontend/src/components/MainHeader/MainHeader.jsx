import React from 'react'
import SocialIconList from '../SocialIconList/SocialIconList'
import s from './MainHeader.module.css'
import burger from './assets/burger.png'
import search from './assets/search.png'
import { menu_list } from '../../data/data'
import { NavLink } from 'react-router-dom'


export default function MainHeader() {
  return (
    <div className={s.main_header}>
      <div className='container'>
        <div className={s.main_header_inner}>
          <div className={s.burger}>
            <img src={burger} alt="burger_icon" />
            <p className={s.burger_title}>Products catalog</p>
          </div>
          {menu_list.map(elem => <NavLink to={elem.link} className={s.main_menu_item} key={elem.id}>{elem.title}</NavLink>)}
          <SocialIconList />
          <div className={s.input_wrapper}>
            <input type='search' name='search' placeholder='Search in catalog' className={s.search} />
            <img className={s.search_icon} src={search} alt='search_icon' />
          </div>

        </div>
      </div>
    </div>
  )
}
