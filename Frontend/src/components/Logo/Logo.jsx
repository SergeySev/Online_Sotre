import React from 'react'
import s from './Logo.module.css'
import logo from './assets/logo.png'

export default function Logo() {
  return (
    <>
      <img className={s.logo} src={logo} alt="logo" />
    </>
  )
}
