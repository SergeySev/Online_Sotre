import React from 'react'
import Breadcrumb from '../Breadcrumb/Breadcrumb'
import s from './Breadcrumbs.module.css'

export function Breadcrumbs({ items }) {
	return (
		<ul className={s.breadcrumbs_list}>
			{items.map((item, index) => (
				<Breadcrumb key={index} text={item.text} link={item.link} />
			))}
		</ul>
	)
}
