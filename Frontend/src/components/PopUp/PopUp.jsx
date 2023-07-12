import { forwardRef, useEffect } from 'react'
import './popup.css'
import s from './PopUp.module.css'

export const PopUp = forwardRef(
	({ content, ...other }, ref) => {

		useEffect(() => {
			const scrollbarWidth =
				window.innerWidth - document.documentElement.clientWidth;
			const fixed_elems = document.querySelectorAll('.fixed');
			fixed_elems.forEach(elem => elem.style.paddingRight = `${scrollbarWidth}px`)
			document.documentElement.style.paddingRight = `${scrollbarWidth}px`;
			document.body.style.overflow = 'hidden';

			return () => {
				fixed_elems.forEach(elem => elem.style.paddingRight = '')
				document.documentElement.style.paddingRight = '';
				document.body.style.overflow = 'auto';
			};
		}, []);

		return (
			<div
				className={s.popup}
				ref={ref}
				{...other}
			>
				{content}
			</div>
		)
	})
