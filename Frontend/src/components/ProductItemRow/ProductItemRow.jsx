import React from 'react'
import s from './ProductItemRow.module.css'
import { FiHeart, FiBarChart2 } from 'react-icons/fi';
import { ToggleCartBtn } from '../ToggleCartBtn/ToggleCartBtn';
import { NewSign } from '../NewSign/NewSign';
import { useDispatch, useSelector } from 'react-redux';
import { toggle_favorite } from '../../store/reducers/favoriteSlice';
import { toggle_comparison } from '../../store/reducers/comparisonSlice';

export default function ProductItemRow({ product }) {

    const { id, mainImageLink, title, description, discountPrice, price, inStock } = product;
    const dispatch = useDispatch();
    const favorite_id_list = useSelector(store => store.favorite.favorite_list).map(el => el.id)
    const comparison_id_list = useSelector(store => store.comparison.comparison_list).map(el => el.id)

    let tag = '';

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
            <div className={s.tag}><NewSign tag={tag} /></div>
            <div className={s.add_to}>
                <FiBarChart2
                    className={`${s.bars} ${s[comparison_id_list.includes(product.id) ? "active" : ""] || ''}`}
                    onClick={() => dispatch(toggle_comparison(product))} />
                <FiHeart
                    className={`${s.heart} ${s[favorite_id_list.includes(product.id) ? "active" : ""] || ''}`}
                    onClick={() => dispatch(toggle_favorite(product))} />
            </div>

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
