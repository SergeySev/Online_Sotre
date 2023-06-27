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

	const bar_list = [0, 1, 2, 3]

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
			<ul className={s.color_bars}>
				{bar_list.map(elem => <li key={elem}
					className={s.item}
					onClick={() => change_product_img(elem)}>
					<div className={`${s.bar_item} ${s[activeImg && img_index === elem ? 'active' : ''] || ''} `}></div>
				</li>)}
			</ul>
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
			<AddToCartBtn product_id={product.id} />
		</div>
	)
}
