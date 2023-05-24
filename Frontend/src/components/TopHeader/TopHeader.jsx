import React from 'react'
import s from './TopHeader.module.css'
import Logo from '../Logo/Logo'


export default function TopHeader({ active, setActive }) {
  return (
    <div className={s.top_header}>
      <div className='container'>
        <div className={s.top_header_inner}>
          <div className={s.left_part}>
            <Logo />
            <p className={s.hours}>Working hours: 10:00 - 20:00</p>
            <div className={s.phones}>
              <p className={s.phone}>+7 495 120-32-14</p>
              <p className={s.order_call}>Order call</p>
            </div>
          </div>
          <div className={s.top_menu}>
            <img src={require('../TopHeader/assets/heart.png')} alt='heart' />
            <img src={require('../TopHeader/assets/bar-chart.png')} alt='bars' />
            <img src={require('../TopHeader/assets/avatar.png')} alt='avatar' onClick={() => setActive(!active)} />
            <img src={require('../TopHeader/assets/cart.png')} alt='cart' />
          </div>
          <p className={s.total}>Total sum</p>
        </div>
      </div>

    </div>
  )
}
