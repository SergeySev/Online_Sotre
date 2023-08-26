import { useDispatch, useSelector } from "react-redux";
import s from "./PopUpOrder.module.css";
import { useAuth } from "../hooks/useAuth";
import { fetch_add_order } from "../../requests/requests";
import { useNavigate } from "react-router-dom";
import { clean_cart } from "../../store/reducers/cartSlice";
import { useEffect } from "react";

export function PopUpOrder() {
	//const navigate = useNavigate();
	const dispatch = useDispatch();

	const { id } = useAuth();
	const deliveryDate = useSelector((store) => store.order.delivery[0].date);

	const cart = useSelector((store) => store.cart);
	const productsId = cart.cart_list.map((product) => product.id);
	const totalSumm = cart.total_summ;

	useEffect(() => {
		const newOrder = {
			order: {
				productsId,
				totalSumm,
				deliveryDate,
				orderDate: new Date(),
			},
			userId: id,
		};
		fetch_add_order(newOrder);
		dispatch(clean_cart());
	}, []);

	return (
		<div className={s.message_content}>
			<p>Thank you for your order</p>
		</div>
	);
}
