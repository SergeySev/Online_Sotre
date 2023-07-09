import s from './TabData.module.css'

export function TabData() {
	return (
		<ul className={s.data_list}>
			<li className={s.data_item}>
				<label>
					Last name
					<input type="text" placeholder='last name' />
				</label>
			</li>
			<li className={s.data_item}>
				<label>
					First name
					<input type="text" placeholder='first name' />
				</label>
			</li>
			<li className={s.data_item}>
				<label>
					Phone number
					<input type="phone" placeholder='+375 495 323–15–15' />
				</label>
			</li>
			<li className={s.data_item}>
				<label>
					e-mail
					<input type="text" placeholder='instroom@gmail.com' />
				</label>
			</li>
		</ul>
	)
}
