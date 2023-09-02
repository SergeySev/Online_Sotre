import { useDispatch, useSelector } from 'react-redux';
import search from './assets/search.png'
import s from './Search.module.css'
import { fetch_searched_products } from '../../requests/requests';

export function Search({ isBlocked }) {

	const dispatch = useDispatch()
	const array = useSelector(store => store.searched_products)

	const handleChange = (e) => {
		if ((e.target.value).length >= 3) {
			dispatch(fetch_searched_products(e.target.value))
		}
	}




	return (
		<form className={`${s.input_wrapper} ${s[isBlocked]}`} >
			<input
				className={s.search}
				type='search'
				name='search'
				placeholder='Search in catalog' onChange={handleChange} minLength={3} />
			<div className={s.search_icon}>
				<img src={search} alt='search_icon' />
			</div>
			<div className={s.search_container}>
			</div>
		</form>
	)
}
