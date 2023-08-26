import { useDispatch } from "react-redux";
import { useContext, useState } from "react";
import { Button } from "../../../UI";
import { payments, radio_orders } from "../../../data/data";
import { payment_data } from "../../../store/reducers/orderSlice";
import { PopUpContext } from "../../../context/popUpContext";
import s from "./TabPayment.module.css";
import { clean_cart } from "../../../store/reducers/cartSlice";
import { useNavigate } from "react-router-dom";

export const TabPayment = () => {

	const contextPopUp = useContext(PopUpContext);
	const navigate = useNavigate();
	const [payment_type, setPaymentType] = useState("receiving");
	const [receiving_type, setReceivingType] = useState("cash");
	const dispatch = useDispatch();

	const paymentChange = (e) => {
		setPaymentType(e.target.value);
	};

	const receivingChange = (e) => {
		setReceivingType(e.target.value);
	};

	const saveData = (e) => {
		e.preventDefault();
		const { payment, cash_bank, bank } = e.target;

		const obj = {
			method: payment.value,
			type: payment.value === "receiving" ? cash_bank.value : bank.value,
		};
		dispatch(payment_data(obj));
		contextPopUp.setTitle("order");
		contextPopUp.setPopupActive(true);
		dispatch(clean_cart());
		navigate("/Online_Store");
	};

	return (
		<>
			<h2 className={s.payment_title}>
				Choose the payment option that suits you:
			</h2>

			<form className={s.checkout_form} onSubmit={saveData}>
				<ul className={s.radio_buttons}>
					{payments.map((elem) => (
						<li
							className={`${s.radio_item} ${s[payment_type === elem.type ? "active" : ""] || ""
								}`}
							key={elem.id}
						>
							<label>
								<input
									type="radio"
									value={elem.type}
									name="payment"
									checked={payment_type === elem.type}
									onChange={paymentChange}
								/>
								{elem.title}
							</label>
						</li>
					))}
				</ul>

				<ul className={s.order_buttons}>
					<>
						{radio_orders.map((elem) => (
							<li
								className={`${s.radio_item} ${s[receiving_type === elem.type ? "active" : ""] || ""
									} ${s[payment_type === "online" ? "disabled" : ""] || ""}`}
								key={elem.id}
							>
								<label>
									<input
										type="radio"
										value={elem.type}
										name="cash_bank"
										checked={receiving_type === elem.type}
										disabled={payment_type === "online"}
										onChange={receivingChange}
									/>
									{elem.title}
								</label>
							</li>
						))}
						<li
							className={`${s.radio_item} ${s["active"]} ${s[payment_type === "receiving" ? "disabled" : ""] || ""
								}`}
						>
							<label>
								<input
									type="radio"
									value="card"
									name="bank"
									checked={payment_type === "online"}
									defaultChecked
								/>
								bank card
							</label>
						</li>
					</>
				</ul>

				<Button text="next" content="confirmOrder" />
				<p className={s.order_description}>
					By&nbsp;clicking on&nbsp;the button you agree to&nbsp;the processing
					of&nbsp;your personal data
				</p>
			</form>
		</>
	);
};
