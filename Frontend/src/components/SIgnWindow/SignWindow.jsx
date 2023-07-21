import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { SignForm, RegisterForm } from '..'
import s from './SignWindow.module.css'
import { useState } from 'react'

export function SignWindow({ setActive }) {

	const [activeWindow, setActiveWindow] = useState('sign')

	return (
		<section className={s.modal_wrapper}
			onClick={(e) => e.stopPropagation(e)}
		>
			<FontAwesomeIcon icon={faXmark} onClick={() => setActive(false)} className={s.close} />
			{activeWindow === "sign" ? <SignForm setActiveWindow={setActiveWindow} /> : <RegisterForm setActiveWindow={setActiveWindow} />}
		</section >
	)
}
