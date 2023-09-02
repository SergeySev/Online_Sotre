import search from './assets/search.png'
import s from './Search.module.css'

export function Search({ isBlocked }) {

	const handleChange = (e) => {
		console.log(e.target.value);
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
			<div className={s.search_container}></div>
		</form>
	)
}
