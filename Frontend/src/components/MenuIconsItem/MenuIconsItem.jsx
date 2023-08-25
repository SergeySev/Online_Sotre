import { useCallback, useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "../";
import { BurgerContext } from "../../context/burgerContext";
import { PopUpContext } from "../../context/popUpContext";
import s from "./MenuIconsItem.module.css";
import { useDispatch } from "react-redux";
import { fetch_check_token } from "../../requests/requests";
import { set_user } from "../../store/reducers/userSlice";

export function MenuIconsItem({ image, title, icon, count, link }) {
	const context = useContext(BurgerContext);
	const contextPopUp = useContext(PopUpContext);
	const dispatch = useDispatch();

	const { isAuth } = useAuth();

	useEffect(() => {
		if (!isAuth && title === "avatar") {
			const saved_token = sessionStorage.getItem("user_token");
			if (!!saved_token) checkToken(saved_token);
		}
	}, []);

	const checkToken = async (token) => {
		const resp = await fetch_check_token({ token });
		dispatch(set_user(resp));
	};

	const showToast = useCallback((message) => {
		toast(message, {
			position: toast.POSITION.TOP_CENTER,
			className: "toast_message",
		});
	});

	const handleClick = () => {
		switch (title) {
			case "phone":
				context.setBurgerActive(false);
				contextPopUp.setTitle("phone");
				contextPopUp.setPopupActive(true);
				break;
			case "favorite":
				if (!count) {
					showToast("You don't have any favorites...");
				} else {
					context.setBurgerActive(false);
				}
				break;
			case "comparison":
				if (!count) {
					showToast("You have nothing to compare...");
				} else {
					context.setBurgerActive(false);
				}
				break;
			case "avatar":
				context.setBurgerActive(false);
				contextPopUp.setPopupActive(true);
				if (isAuth) {
					contextPopUp.setTitle("profile");
				} else {
					contextPopUp.setTitle("sign");
				}
				break;
			case "cart":
				if (!count) {
					showToast("You cart is empty...");
				} else {
					context.setBurgerActive(false);
				}
				break;
			default:
				break;
		}
	};

	return (
		<>
			<li
				className={`${s.menu_item} ${
					s[title === "phone" ? "blocked" : ""] || ""
				} ${s[title === "avatar" && isAuth ? "login" : ""] || ""}`}
				onClick={handleClick}
			>
				<NavLink className={s.item_link} to={count ? link : "#"}>
					<div className={s.icon_wrapper}>
						{image ? <img src={image} alt={title} /> : icon}
						{count ? <p className={s.counter}>{count}</p> : ""}
					</div>
				</NavLink>
			</li>
			<ToastContainer autoClose={1000} closeOnClick />
		</>
	);
}
