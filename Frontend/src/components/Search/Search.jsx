import { useDispatch, useSelector } from 'react-redux';
import search from './assets/search.png'
import s from './Search.module.css'
import { fetch_searched_products } from '../../requests/requests';
import { useEffect, useState } from 'react';
import SearchItem from './SearchItem/SearchItem';

export function Search({ isBlocked }) {

	const dispatch = useDispatch()
	const [keyword, setKeyword] = useState('');

	const searched_products = useSelector(store => Object.keys(store.searched_products).length !== 0 ? store.searched_products.content : [])
	const pages = useSelector(store => store.searched_products?.totalPages)
	const elements = useSelector(store => store.searched_products?.totalElements)


	const handleChange = (e) => {
		setKeyword(e.target.value)
	}

	useEffect(() => {

		if (keyword.length >= 3) {
			dispatch(fetch_searched_products(keyword))
		} else {
			dispatch(fetch_searched_products(''))
		}
		// console.log(keyword);
		// console.log(searched_products);
		// console.log("pages :", pages);
		// console.log(" total :", elements);
	}, [keyword])


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
			<div className={s.search_wrapper}>
				<div className={s.search_container}>
					{searched_products.map(el => <SearchItem {...el} key={el.id} />)}
				</div>
				<div className={s.search_showmore}>Show more</div>
			</div>

		</form>
	)
}
