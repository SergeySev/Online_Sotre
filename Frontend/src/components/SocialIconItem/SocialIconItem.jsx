import React from 'react'
import s from './SocialIconItem.module.css'

export default function SocialIconItem({ title, image }) {

	return (
		<li className={s.icon_container}>
			<img src={image} alt={title} />
		</li>
	)
}
