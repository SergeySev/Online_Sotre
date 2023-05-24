import React from 'react'
import SocialIconItem from '../SocialIconItem/SocialIconItem'
import s from './SocialIconList.module.css'
import { social_icons } from '../../data/data'


export default function SocialIconList() {
  return (
    <div className={s.social_icon_list}>
      {social_icons.map(elem => <SocialIconItem key={elem.id} {...elem} />)}
    </div>
  )
}
