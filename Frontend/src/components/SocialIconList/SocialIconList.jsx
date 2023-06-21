import React from 'react'
import SocialIconItem from '../SocialIconItem/SocialIconItem'
import s from './SocialIconList.module.css'
import { social_icons } from '../../data/data'


export default function SocialIconList({ isSticky }) {
	return (
		// <ul className={s.social_icon_list}>
		<ul className={`${s.social_icon_list} ${s[isSticky ? 'sticky' : ''] || ''}`} >
			{social_icons.map(elem => <SocialIconItem key={elem.id} {...elem} />)}
		</ul>
	)
}
