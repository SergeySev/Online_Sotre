import React from 'react'
import s from './BannerItem.module.css'
import arrow from './assets/arrow-left.png'

export default function BannerItem({ image, text, has_btn }) {
	return (
		<div className={s.banner_item}>
			<img className={s.banner_image} src={image} alt={text} />
			<p className={has_btn ? s.banner_title_big : s.banner_title}>{text}</p>
			<div className={s.banner_link}>
				<img src={arrow} className={s.arrow} alt='arrow' />
			</div>
		</div>
	)
}
