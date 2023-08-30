import { useDispatch, useSelector } from "react-redux";
import s from "./PopUpOrder.module.css";
import { useAuth } from "../hooks/useAuth";
import { fetch_add_order } from "../../requests/requests";
import { clean_cart } from "../../store/reducers/cartSlice";
import { useEffect } from "react";
import { set_user, update_orders } from "../../store/reducers/userSlice";

export function PopUpOrder() {
	const dispatch = useDispatch();

	const { id } = useAuth();
	const deliveryDate = useSelector((store) => store.order.delivery[0].date);

	const cart = useSelector((store) => store.cart);
	const productsId = cart.cart_list.reduce((acc, item) => {
		for (let i = 0; i < item.cart_amount; i++) {
			acc.push(item.id);
		}
		return acc;
	}, []);
	const totalSum = cart.total_summ;

	useEffect(() => {
		const newOrder = {
			productsId,
			totalSum,
			deliveryDate,
			orderDate: new Date(),
		};
		//fetch_add_order(newOrder, id);
		getOrders(newOrder);
		dispatch(clean_cart());
	}, []);

	const getOrders = async (newOrder) => {
		const resp = await fetch_add_order(newOrder, id);

		dispatch(set_user(resp));
	};

	return (
		<div className={s.message_content}>
			<p>Thank you for your order</p>
		</div>
	);
}
