import search from './assets/search.png'
import s from './Search.module.css'

export default function Search({ isBlocked }) {
	return (
		<div className={`${s.input_wrapper} ${s[isBlocked]}`} >
			<input
				className={s.search}
				type='search'
				name='search'
				placeholder='Search in catalog' />
			<div className={s.search_icon}>
				<img src={search} alt='search_icon' />
			</div>
		</div>
	)
}
