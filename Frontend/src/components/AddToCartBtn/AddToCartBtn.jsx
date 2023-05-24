import React from 'react';
import s from './AddToCartBtn.module.css'

export default function AddToCartBtn() {
  return (
    <div className={s.cart_btn}>
      <img src={require('./assets/shopping-cart.png')} />
    </div>
  )
}
