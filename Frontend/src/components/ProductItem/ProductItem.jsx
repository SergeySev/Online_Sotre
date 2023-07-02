import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import bars from './assets/bar-chart-2.png'
import heart from './assets/heart.png'
import { NewSign, AddToCartBtn } from '../'
import s from './ProductItem.module.css'

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

	const { ref, inView } = useInView({
		threshold: 0.1,
		triggerOnce: true,
	});

	const [img_index, setImg_index] = useState(0)
	const [activeImg, setActiveImg] = useState(true);
	const change_product_img = (image_index) => {
		setImg_index(image_index);
		setActiveImg(true)
	}

	const bar_list = [0, 1, 2, 3]

	return (
		<li className={s.product_item}>
			<div className={s.top_signs}>
				<div className={s.tag}><NewSign tag={tag} /></div>
				<div className={s.add_to}>
					<img src={bars} alt='bars' className={s.bars} />
					<img src={heart} alt='heart' />
				</div>
			</div>
			<div ref={ref} className={s.img_wrapper}>
				{inView ?
					<img src={product.productImagesLinks[img_index]} alt='product_image' className={s.product_img} />
					: <div className='photo-card_skeleton'></div>}
			</div>
			{/* <img src={product.productImagesLinks[img_index]} alt='product_image' className={s.product_img}
				loading='lazy' /> */}
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
					<p className={s.discount_price}>{product.discountPrice === 0.00 ? product.price : product.discountPrice} $</p>
					{product.discountPrice !== 0.00 && <p className={s.price}>{product.price} $</p>}
				</div>
				<div className={s.stock}>
					{product.inStock && <img src={require('./assets/check.png')} className={s.stock_img} alt='stock_img' />}
					<p className={s.in_stock}>{product.inStock ? 'in stock' : 'not in stock'}</p>
				</div>
			</div>
			<AddToCartBtn product={product} />
		</li>
	)
}
