import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Button } from '../../../UI';
import s from './CartTotalInfo.module.css'

export function CartTotalInfo() {

	const sum = useSelector(store => store.cart.total_summ);
	const discont = -(sum * .07).toFixed(2);
	const total = (sum + discont).toFixed(2);
	return (
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
			<NavLink to='/checkout'>
				<Button text="Go to design" content="order" />
			</NavLink>
		</div>
	)
}
