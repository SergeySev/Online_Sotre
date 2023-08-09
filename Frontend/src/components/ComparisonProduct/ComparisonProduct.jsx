import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { toggle_comparison } from '../../store/reducers/comparisonSlice';
import { ToggleCartBtn } from '../'
import s from './ComparisonProduct.module.css'

export function ComparisonProduct({ product }) {
	const dispatch = useDispatch();
	return (
		<li className={s.product_item}>
			<FontAwesomeIcon icon={faXmark} onClick={() => dispatch(toggle_comparison(product))} className={s.close} />
			<div className={s.img_wrapper}>
				<img className={s.product_img} src={product.mainImageLink} alt="product.title" />
			</div>
			<p className={s.product_title}>{product.title}</p>
			<p className={s.discount_price}>{product.discountPrice === 0.00 ? product.price : product.discountPrice} &#36;</p>
			<ToggleCartBtn product={product} bottom={true} content='comparison' />
		</li>
	)
}
