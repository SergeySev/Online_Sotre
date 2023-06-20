import s from './TopMenuItem.module.css'

export default function TopMenuItem({ image, title }) {
	return (
		<li className={s.menu_item} >
			<img src={image} alt={title} />
		</li>
	)
}
