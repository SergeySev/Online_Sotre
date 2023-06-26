import React, { useState } from 'react'
import s from './ProductItem.module.css'
import bars from './assets/bar-chart-2.png'
import heart from './assets/heart.png'
import NewSign from '../NewSign/NewSign'
import AddToCartBtn from '../AddToCartBtn/AddToCartBtn'

export function ProductItem({ product }) {
	let tag = 'NEW'
	if (product.isNew === 'true') {
		tag = 'NEW'
	}
	if (product.isHit === 'true') {
		tag = 'HIT'
	}
	if (product.discountPrice !== '0.00') {
		tag = 'PROMO'
	}


	const [img_index, setImg_index] = useState(0)
	const [activeImg, setActiveImg] = useState(true);
	const change_product_img = (image_index) => {
		setImg_index(image_index);
		setActiveImg(true)
	}

	return (
		<div className={s.product_item}>
			<div className={s.top_signs}>
				<div className={s.tag}><NewSign tag={tag} /></div>
				<div className={s.add_to}>
					<img src={bars} alt='bars' className={s.bars} />
					<img src={heart} alt='heart' />
				</div>
			</div>
			<img src={product.productImagesLinks[img_index]} alt='product_image' className={s.product_img} />
			<div className={s.color_bars}>
				<div className={activeImg && img_index === 0 ? s.bar_item_active : s.bar_item} onClick={() => change_product_img(0)}></div>
				<div className={activeImg && img_index === 1 ? s.bar_item_active : s.bar_item} onClick={() => change_product_img(1)}></div>
				<div className={activeImg && img_index === 2 ? s.bar_item_active : s.bar_item} onClick={() => change_product_img(2)}></div>
				<div className={activeImg && img_index === 3 ? s.bar_item_active : s.bar_item} onClick={() => change_product_img(3)}></div>
			</div>
			<p className={s.product_title}>{product.title}</p>
			<div className={s.properties}>
				<div className={s.price_box}>
					<p className={s.discount_price}>{product.discountPrice === '0.00' ? product.price : product.discountPrice} $</p>
					{product.discountPrice !== '0.00' && <p className={s.price}>{product.price} $</p>}
				</div>
				<div className={s.stock}>
					{product.inStock && <img src={require('./assets/check.png')} className={s.stock_img} alt='stock_img' />}
					<p className={s.in_stock}>{product.inStock ? 'in stock' : 'not in stock'}</p>
				</div>
			</div>
			<AddToCartBtn />
		</div>
	)
}
