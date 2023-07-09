import { Button } from '../../UI'
import s from './CartTotalInfo.module.css'

export function CartTotalInfo() {
	const sum = 200;
	const discont = -50;
	const total = sum + discont;
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

			<Button text="Go to design" content="order" />
		</div>
	)
}
