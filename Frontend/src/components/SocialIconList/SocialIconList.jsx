import { social_icons } from '../../data/data'
import SocialIconItem from '../SocialIconItem/SocialIconItem'
import s from './SocialIconList.module.css'


export function SocialIconList({ content }) {

	return (
		<ul className={`${s.social_icon_list} ${s[content] || ''}`}>
			{social_icons.map(elem => <SocialIconItem key={elem.id} {...elem} />)}
		</ul>
	)
}
