import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { sort_ascending_price, sort_by_hits, sort_by_new, sort_by_promo, sort_descending_price, sort_fromA, sort_fromZ } from '../../store/reducers/favoriteSlice';
import s from './SortSelect.module.css'

export function SortSelect({ content }) {
	const refSelect = useRef();

	useEffect(() => {
		refSelect.current.value = 'new';
	}, [content]);

	const dispatch = useDispatch();

	const handleSelect = (e) => {
		switch (e.target.value) {
			case 'new':
				dispatch(sort_by_new());
				break;
			case 'hits':
				dispatch(sort_by_hits());
				break;
			case 'promo':
				dispatch(sort_by_promo());
				break;
			case 'asc':
				dispatch(sort_ascending_price());
				break;
			case 'desc':
				dispatch(sort_descending_price());
				break;
			case 'fromA':
				dispatch(sort_fromA());
				break;
			case 'fromZ':
				dispatch(sort_fromZ());
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
