import { social_icons } from '../../data/data'
import SocialIconItem from '../SocialIconItem/SocialIconItem'
import s from './SocialIconList.module.css'


export default function SocialIconList() {
	return (
		<ul className={s.social_icon_list}>
			{social_icons.map(elem => <SocialIconItem key={elem.id} {...elem} />)}
		</ul>
	)
}
