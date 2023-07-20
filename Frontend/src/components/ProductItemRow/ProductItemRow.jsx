import React from 'react'
import s from './ProductItemRow.module.css'

export default function ProductItemRow({ product }) {

    const { id, mainImageLink, title, description, discountPrice, price, inStock } = product;

    console.log(product)
    let tag = ''
    if (product.isNew) {
        tag = 'NEW'
    }
    if (product.isHit) {
        tag = 'HIT'
    }
    if (product.discountPrice) {
        tag = 'PROMO'
    }
    return (
        <div className={s.product_item_row}>
            <div className={s.image_wrapper}>
                <img src={mainImageLink} />
            </div>
            <div className={s.product_info}>
                <h4 className={s.title}>{title}</h4>
                <p className={s.description}>{description}</p>
                <p>{inStock !== null ? 'in stock' : 'not in stock'}</p>
            </div>
            <div className={s.price_container}>
                <span className={s.discount_price}>{discountPrice !== 0 ? discountPrice : price} $</span>
                {discountPrice !== 0 && <span className={s.price}>{product.price} $</span>}
            </div>
        </div>
    )
}
