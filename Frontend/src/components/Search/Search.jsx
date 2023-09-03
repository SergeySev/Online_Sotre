import { useDispatch, useSelector } from 'react-redux';
import search from './assets/search.png'
import s from './Search.module.css'
import { fetch_searched_products } from '../../requests/requests';
import { useEffect, useState } from 'react';
import SearchItem from './SearchItem/SearchItem';

export function Search({ isBlocked }) {

	const dispatch = useDispatch()
	const [keyword, setKeyword] = useState('');
	let [currentPage, setCurrentPage] = useState(1);

	const searched_products = useSelector(store => Object.keys(store.searched_products).length !== 0 ? store.searched_products.content : [])
	const pages = useSelector(store => store.searched_products?.totalPages)

	const handleChange = (e) => {
		setKeyword(e.target.value)
	}

	useEffect(() => {
		if (keyword.length >= 3) {
			dispatch(fetch_searched_products(keyword, currentPage))
		} else {
			dispatch(fetch_searched_products('', 1))
		}
	}, [keyword])

	const showMoreHandler = () => {
		if (currentPage < pages) {
			setCurrentPage(++currentPage)
			console.log(currentPage);
			console.log(searched_products);
			dispatch(fetch_searched_products(keyword, currentPage))
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
			{searched_products.length && <div className={s.search_wrapper}>
				<div className={s.search_container}>
					{searched_products.map(el => <SearchItem {...el} key={el.id} />)}
				</div>
				<div className={s.search_showmore}>
					<p onClick={showMoreHandler}>Show more</p>
					{/* <p style={keyword.length >= 3 ? { color: "white" } : { color: "lightgray" }}>Show more</p> */}
				</div>
			</div>}

		</form>
	)
}
