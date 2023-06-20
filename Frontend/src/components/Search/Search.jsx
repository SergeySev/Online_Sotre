import { CiSearch } from 'react-icons/ci';
import search from './assets/search.png'
import s from './Search.module.css'

export default function Search() {
	return (
		<div className={s.input_wrapper}>
			<input className={s.search} type='search' name='search' placeholder='Search in catalog' />
			{/* <CiSearch className={s.search_icon} /> */}
			<div className={s.search_icon}>
				<img src={search} alt='search_icon' />
			</div>
		</div>
	)
}
