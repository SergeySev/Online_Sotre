import { useContext } from 'react'
import { BurgerContext } from '../../context/burgerContext'
import { NavLink } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import s from './MenuIconsItem.module.css'

export function MenuIconsItem({ image, title, icon, count, link }) {
	const context = useContext(BurgerContext);


	const handleClick = (e) => {
		e.preventDefault();
		context.setBurgerActive(false);
		if (!count && title === "favorite") {
			toast("You don't have any favorites...", {
				position: toast.POSITION.TOP_CENTER,
				className: 'toast_message'
			});
		}
	}

	return (
		<>
			<li
				className={`${s.menu_item} ${s[title === "phone" ? 'blocked' : ''] || ''}`}
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
		</>
	)
}
