import { useState } from 'react'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SignForm, RegisterForm, CallRequest, CallRequestAlert, WrongAuthentication } from '..'
import s from './SignWindow.module.css'

export function SignWindow({ setActive, popup }) {

	const [activeWindow, setActiveWindow] = useState(popup)

	const content = () => {
		let field;
		switch (activeWindow) {
			case 'sign':
				field = <SignForm setActiveWindow={setActiveWindow} setActive={setActive} />
				break;
			case 'register':
				field = <RegisterForm setActiveWindow={setActiveWindow} setActive={setActive} />
				break;
			case 'phone':
				field = <CallRequest setActiveWindow={setActiveWindow} />
				break;
			case 'alert':
				field = <CallRequestAlert setActive={setActive} />
				break;
			case 'error':
				console.log("🚀 ~ file: SignWindow.jsx:10 ~ SignWindow ~ activeWindow:", activeWindow)
				field = <WrongAuthentication setActiveWindow={setActiveWindow} setActive={setActive} />
				break;
			default: n
				break;
		}
		return field
	}

	return (
		<section className={s.modal_wrapper}
			onClick={(e) => e.stopPropagation(e)}
		>
			<FontAwesomeIcon icon={faXmark} onClick={() => setActive(false)} className={s.close} />
			{content()}
		</section >
	)
}
