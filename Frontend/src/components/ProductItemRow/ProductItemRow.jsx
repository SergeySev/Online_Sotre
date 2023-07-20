import React from 'react'
import s from './ProductItemRow.module.css'
import { ToggleCartBtn } from '../ToggleCartBtn/ToggleCartBtn';

export default function ProductItemRow({ product }) {

    const { id, mainImageLink, title, description, discountPrice, price, inStock } = product;

    console.log(product);

    console.log(product.inStock);

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
                <div className={s.stock}>
                    {inStock !== 0 && <img src={require('./assets/check.png')} className={s.stock_img} alt='stock_img' />}
                    <p className={s.in_stock}>{inStock ? 'in stock' : 'not in stock'}</p>
                </div>
            </div>
            <div className={s.price_container}>
                <span className={s.discount_price}>{discountPrice !== 0 ? discountPrice : price} $</span>
                {discountPrice !== 0 && <span className={s.price}>{product.price} $</span>}
                <ToggleCartBtn product={product} bottom={false} />
            </div>
        </div>
    )
}
