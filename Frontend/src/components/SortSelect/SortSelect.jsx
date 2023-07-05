import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import s from './SortSelect.module.css'
import { sort_by_tag } from '../../store/reducers/favoriteSlice';

export function SortSelect({ content }) {
	const refSelect = useRef();

	useEffect(() => {
		refSelect.current.value = 'new';
	}, [content]);

	const dispatch = useDispatch();

	const handleSelect = (e) => {
		const isTag = (
			e.target.value === 'new' ||
			e.target.value === 'hits' ||
			e.target.value === 'promo') ?
			"tag" : e.target.value;
		switch (isTag) {
			case 'default':
				console.log(e.target.value);
				break;
			case 'tag':
				dispatch(sort_by_tag(e.target.value));
				break;
			case 'asc':
				console.log(e.target.value);
				break;
			case 'desc':
				console.log(e.target.value);
				break;
			case 'fromA':
				console.log(e.target.value);
				break;
			case 'fromZ':
				console.log(e.target.value);
				break;
			default:
				break;
		}
	}
	return (
		<>
			<p>Sorted:</p>
			<div className={s.select_wrapper}>
				<select
					className={s.select}
					onChange={handleSelect}
					ref={refSelect}
				>
					{/* <option value="default" ></option> */}
					<option value="new" >New first</option>
					<option value="hits">Popular first</option>
					<option value="promo">Discount first</option>
					<option value="asc">Ascending price</option>
					<option value="desc">Descending price</option>
					<option value="fromA">From A to Z</option>
					<option value="fromZ">From Z to A</option>
				</select>
			</div>
		</>
	)
}
