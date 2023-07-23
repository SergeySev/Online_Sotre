import s from './WrongAuthentication.module.css'

export function WrongAuthentication({ setActiveWindow, setActive }) {
	return (
		<div className={s.content}>
			<h3 className={s.title}>
				Incorrect email or password
			</h3>
			<span className={s.sign_in}
				onClick={() => setActiveWindow("sign")}
			>Sign in</span>


		</div>
	)
}
