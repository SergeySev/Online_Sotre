import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { useDispatch, useSelector } from 'react-redux'
import { toggle_favorite } from '../../store/reducers/favoriteSlice'
import { FiHeart, FiBarChart2 } from 'react-icons/fi';
import { NewSign, ToggleCartBtn } from '../'
import s from './ProductItem.module.css'
import { fetch_comparison_product } from '../../requests/requests'

export function ProductItem({ product }) {
	const [img_index, setImg_index] = useState(0)
	const [activeImg, setActiveImg] = useState(true);
	const dispatch = useDispatch();

	console.log(product);

	const favorite_id_list = useSelector(store => store.favorite.favorite_list).map(el => el.id)
	const comparison_id_list = useSelector(store => store.comparison.comparison_list).map(el => el.id)

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

	const { ref, inView } = useInView({
		threshold: 0.1,
		triggerOnce: true,
	});

	const change_product_img = (image_index) => {
		setImg_index(image_index);
		setActiveImg(true)
	}

	const bar_list = [0, 1, 2, 3]

	return (
		<li className={s.product_item}>
			<div className={s.top_signs}>
				<div><NewSign tag={tag} /></div>
				<div className={s.add_to}>
					<FiBarChart2
						className={`${s.bars} ${s[comparison_id_list.includes(product.id) ? "active" : ""] || ''}`}
						onClick={() => dispatch(() => dispatch(fetch_comparison_product(product.id)))} />
					<FiHeart
						className={`${s.heart} ${s[favorite_id_list.includes(product.id) ? "active" : ""] || ''}`}
						onClick={() => dispatch(toggle_favorite(product))} />
				</div>
			</div>
			<div ref={ref} className={s.img_wrapper}>
				{inView ?
					<img src={product.productImagesLinks[img_index]} alt='product_image' className={s.product_img} />
					: <div className='photo-card_skeleton'></div>}
			</div>
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
					<p className={s.discount_price}>{product.discountPrice === 0.00 ? product.price : product.discountPrice} &#36;</p>
					{product.discountPrice !== 0.00 && <p className={s.price}>{product.price} &#36;</p>}
				</div>
				<div className={s.stock}>
					{product.inStock && <img src={require('./assets/check.png')} className={s.stock_img} alt='stock_img' />}
					<p className={s.in_stock}>{product.inStock ? 'in stock' : 'not in stock'}</p>
				</div>
			</div>
			<ToggleCartBtn product={product} bottom={true} />
		</li>
	)
}
