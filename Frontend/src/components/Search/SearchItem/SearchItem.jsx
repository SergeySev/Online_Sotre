import React from 'react'
import s from './SearchItem.module.css'

export default function SearchItem({ mainImageLink, title, price }) {
    // const price_to_show = price
    return (
        <div className={s.product_wrapper}>
            <div className={s.product_image}>
                <img src={mainImageLink} alt="" />
            </div>
            <div>
                <p className={s.product_title}>{title}</p>
            </div>

            <h4 className={s.product_price}>{Math.round(price)} $</h4>
        </div>
    )
}
