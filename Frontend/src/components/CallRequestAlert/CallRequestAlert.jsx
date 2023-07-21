import { HashLink } from 'react-router-hash-link'
import { Button } from '../../UI'
import s from './CallRequestAlert.module.css'

export function CallRequestAlert({ setActive }) {
	return (
		<div className={s.content}>
			<h3 className={s.title}>
				Your application has been accepted
			</h3>
			<p className={s.comment}>
				Thanks for the application! We will contact you shortly
			</p>
			<HashLink to="/Online_Store"
				onClick={() => setActive(false)}
			>
				<Button
					text='To home'
					content="phone_alert" />
			</HashLink>
		</div>
	)
}
