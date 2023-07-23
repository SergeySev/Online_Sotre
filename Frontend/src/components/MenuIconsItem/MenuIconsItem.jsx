import { useCallback, useContext, useState } from 'react'
import { BurgerContext } from '../../context/burgerContext'
import { NavLink, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CallRequest, PopUpContainer, PopUpContent, useAuth } from '../';
import s from './MenuIconsItem.module.css'

export function MenuIconsItem({ image, title, icon, count, link }) {
	const context = useContext(BurgerContext);
	const [popup_active, setPopupActive] = useState(false);

	const { isAuth } = useAuth();
	console.log("🚀 ~ file: MenuIconsItem.jsx:10 ~ MenuIconsItem ~ title:", title)
	console.log("🚀 ~ file: MenuIconsItem.jsx:14 ~ MenuIconsItem ~ isAuth:", isAuth)
	// const navigate = useNavigate();

	const showToast = useCallback((message) => {
		toast(message, {
			position: toast.POSITION.TOP_CENTER,
			className: 'toast_message'
		});
	})

	const handleClick = (e) => {
		e.preventDefault();
		context.setBurgerActive(false);

		if (!count) {
			switch (title) {
				case 'phone':
					setPopupActive(true);
					break;
				case 'favorite':
					showToast("You don't have any favorites...");
					break;
				case 'comparison':
					showToast("You have nothing to compare...");
					break;
				case 'avatar':
					setPopupActive(true)
					break;
				case 'cart':
					showToast("You cart is empty...");
					break;
				default:
					break;
			}
		}
	}

	return (
		<>
			<li
				className={`${s.menu_item} ${s[title === "phone" ? 'blocked' : ''] || ''} ${s[title === 'avatar' && isAuth ? 'login' : ''] || ''}`}
				onClick={handleClick}>
				<NavLink
					className={s.item_link}
					to={count ? link : '#'}>
					<div className={s.icon_wrapper}>
						{image ?
							<img src={image} alt={title} />
							: icon}
						{count ? <p className={s.counter}>{count}</p> : ""}
					</div>
				</NavLink>
			</li>
			<ToastContainer />
			<PopUpContainer
				popup_active={popup_active}
				setPopupActive={setPopupActive}
				content={
					< PopUpContent
						active={popup_active}
						setActive={setPopupActive}
						popup={title === "avatar" ?
							(isAuth ? 'profile' : 'sign') :
							"phone"} />
				}
			/>
		</>
	)
}
