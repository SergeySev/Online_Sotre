import { AiOutlineClose } from 'react-icons/ai';
import { add_to_cart, remove_from_cart } from '../../../store/reducers/cartSlice';
import { NavLink } from 'react-router-dom';
import s from './CartItem.module.css'
import { useDispatch } from 'react-redux';

export function CartItem(product) {
	const { mainImageLink, title, subCategoryTitle, discountPrice, price, cart_amount, mainCategoryId, subCategoryId } = product;
	// const { mainImageLink, title, subCategory, discountPrice, price, cart_amount } = product;
	const dispatch = useDispatch()
	const total_summ = ((discountPrice ? discountPrice : price) * cart_amount).toFixed(2);

	const remoove_from = (count) => {
		const data = {
			product,
			count
		}
		dispatch(remove_from_cart(data))
	}

	return (
		<li className={s.cart_item}>
			<div className={s.image_wrapper}>
				<img src={mainImageLink} alt={title} />
			</div>
			<div className={s.product_info}>
				<NavLink to={`/catalog/${mainCategoryId}/${subCategoryId}`}>
					<h3
						className={s.sub_title}>
						{subCategoryTitle}
					</h3>
				</NavLink>
				<p className={s.product_title}>{title}</p>
			</div>
			<div className={s.price_wrapper}>
				{discountPrice ? <p className={s.price}>{price} &#36;</p> : ""}
				<p className={s.product_price}>
					{discountPrice ? discountPrice : price} &#36;
				</p>
			</div>
			<div className={s.quantity_wrapper}>
				<button
					className={s.btn}
					onClick={() => remoove_from(1)}
				>-</button>
				<span>{cart_amount}</span>
				<button
					className={s.btn}
					onClick={() => dispatch(add_to_cart(product))}
				>+</button>
			</div>
			<div className={s.summ}>
				<span>total: </span>
				<p>{total_summ} &#36;</p>
			</div>
			<AiOutlineClose
				className={s.close_btn}
				onClick={() => remoove_from(cart_amount)}
			/>
		</li>
	)
}
