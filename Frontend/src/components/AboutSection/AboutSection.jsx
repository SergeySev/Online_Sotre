import React from 'react'
import { Button } from '../../UI'
import s from './AboutSection.module.css'
import image from './assets/about.png'
import { NavLink } from 'react-router-dom'

export function AboutSection() {
	return (
		<section id="about" className={s.about_section}>
			<div className='container'>
				<div className={s.about_inner}>
					<img src={image} alt='hands' />
					<div className={s.about_description}>
						<h2 className={s.about_title}>About us</h2>
						<p className={s.about_text}>A commercial or industrial enterprise, a commercial and industrial association of entrepreneurs,
							a form of organization of an enterprise in which its legal personality differs from the legal personality of the persons participating in it.</p>
						<p className={s.about_text}>Commercial or industrial enterprise, commercial and industrial association of entrepreneurs, form of organization of an enterprise</p>
						<NavLink to={'/catalog/'}><Button text='Go to Catalog' content='about' /></NavLink>
					</div>
				</div>
			</div>
		</section>
	)
}
