import { AiOutlineClose } from 'react-icons/ai';
import s from './CartItem.module.css'

export function CartItem({ mainImageLink, title, subCategory, discountPrice, price, cart_amount }) {

	const total_summ = (discountPrice ? discountPrice : price) * cart_amount;
	return (
		<li className={s.cart_item}>
			<div className={s.image_wrapper}>
				<img src={mainImageLink} alt={title} />
			</div>
			<div className={s.product_info}>
				<h3 className={s.sub_title}>{subCategory}</h3>
				<p className={s.product_title}>{title}</p>
			</div>
			<div className={s.price_wrapper}>
				{discountPrice ? <p className={s.price}>{price} &#36;</p> : ""}
				<p className={s.product_price}>
					{discountPrice ? discountPrice : price} &#36;
				</p>
			</div>
			<div className={s.quantity_wrapper}>
				<button className={s.btn}>-</button>
				<span>{cart_amount}</span>
				<button className={s.btn}>+</button>
			</div>
			<p className={s.total_summ}>
				<span>total: </span>
				<span>{total_summ} &#36;</span>
			</p>
			<AiOutlineClose className={s.close_btn} />
		</li>
	)
}
