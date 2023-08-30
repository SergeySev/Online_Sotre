import { useState } from "react";
import s from "./UserOrderItem.module.css";
import { IoIosArrowDown } from "react-icons/io";

export function UserOrderItem({
	orderDate,
	deliveryDate,
	totalSum,
	products,
	index,
}) {
	const [isActive, setActive] = useState(false);

	const originalDate = new Date(orderDate);
	const order_formated = `${originalDate.getUTCDate()}.${
		originalDate.getUTCMonth() + 1
	}.${originalDate.getUTCFullYear()}`;

	const handleOpen = () => {
		setActive(!isActive);
	};

	return (
		<li className={s.order}>
			<div className={s.order_info}>
				<div className={s.order_title}>
					<span>Order &#8470;</span>
					<span>{index}</span>
				</div>

				<ul className={s.date_list}>
					<li className={s.date_item}>
						<span>Created:</span>
						<span>{orderDate.length > 10 ? order_formated : "n/d"}</span>
					</li>
					<li className={s.date_item}>
						<span>Delivered:</span>
						<span>{deliveryDate ? deliveryDate : "n/d"}</span>
					</li>
					<li>
						<IoIosArrowDown
							className={`${s.arrow} ${s[isActive ? "active" : ""] || ""}`}
							onClick={handleOpen}
						/>
					</li>
				</ul>
			</div>

			<div
				className={`${s.order_content} ${s[isActive ? "active" : ""] || ""}`}
			>
				<ul className={s.order_list}>
					{products.map((product) => (
						<li className={s.order_item} key={product.id}>
							<div className={s.product_img}>
								<img src={product.mainImageLink} alt={product.title} />
							</div>
							<span>{product.title}</span>
							<div className={s.amount_info}>
								<span>
									{product.discountPrice
										? product.discountPrice
										: product.price}{" "}
									&#36;
								</span>
								<span>x</span>
								<span>{product.cart_amount}</span>
							</div>
							<span>
								{product.discountPrice
									? product.discountPrice * product.cart_amount
									: product.price * product.cart_amount}{" "}
								&#36;
							</span>
						</li>
					))}
				</ul>
				<div className={s.summ}>
					<span className={s.summ_title}>Total:</span>
					<span className={s.summ_value}>{totalSum} &#36;</span>
				</div>
			</div>
		</li>
	);
}
