import React from 'react'
import s from './Logo.module.css'
import logo from './assets/logo.png'

export default function Logo() {
	return (
		<div className={s.logo}>
			<img src={logo} alt="logo" />
		</div>
	)
}
