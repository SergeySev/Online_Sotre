import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../../UI';
import s from './CartTotalInfo.module.css'
import { useAuth } from '../../';
import { useContext } from 'react';
import { PopUpContext } from '../../../context/popUpContext';

export function CartTotalInfo() {

	const { isAuth } = useAuth()
	const navigate = useNavigate()
	const contextPopUp = useContext(PopUpContext);
	const sum = useSelector(store => store.cart.total_summ);
	const discont = -(sum * .07).toFixed(2);
	const total = (sum + discont).toFixed(2);

	const handleOrder = () => {
		if (isAuth) {
			navigate('/checkout')
		} else {
			contextPopUp.setPopupActive(true);
			contextPopUp.setTitle('sign');
		}
	}

	return (
		<>
			<div className={s.order_info}>
				<div className={s.info_line}>
					<p>Sum</p>
					<p>{sum} &#36;</p>
				</div>
				<div className={`${s.info_line} ${s.discont}`}>
					<p>Discont</p>
					<p>{discont} &#36;</p>
				</div>
				<div className={`${s.info_line} ${s.total}`}>
					<p>To pay</p>
					<span>{total} &#36;</span>
				</div>
				<Button text="Go to order" content="order" onClick={handleOrder} />
			</div>

			{/*<PopUpContainer
				popup_active={popup_active}
				setPopupActive={setPopupActive}
				content={
					< PopUpContent
						active={popup_active}
						setActive={setPopupActive}
						popup='sign' />
				}
			/>*/}
		</>
	)
}
