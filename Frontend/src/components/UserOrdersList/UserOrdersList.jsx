import { UserOrderItem } from "../UserOrderItem/UserOrderItem";
import { useAuth } from "../hooks/useAuth";
import s from "./UserOrdersList.module.css";

export function UserOrdersList() {
	const { id, orders } = useAuth();

	return (
		<ul className={s.orders_content}>
			{orders.map((order, index) => (
				<UserOrderItem
					key={index}
					{...order}
					index={`${id.slice(-3)}.${index}`}
				/>
			))}
		</ul>
	);
}
