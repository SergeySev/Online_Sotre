import s from './TopMenuItem.module.css'

export default function TopMenuItem({ image, title, icon }) {
	// console.log("icon: ", icon);
	return (
		<li className={`${s.menu_item} ${s[icon ? 'blocked' : ''] || ''}`} >
			{image ? <img src={image} alt={title} /> : icon}
		</li>
	)
}
