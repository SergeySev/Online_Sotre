import React, { forwardRef } from 'react'
import s from './Input.module.css'

export const Input = forwardRef((props, ref) => {
	return (
		<input ref={ref} {...props} className={s.input_elem} />
	)
})

