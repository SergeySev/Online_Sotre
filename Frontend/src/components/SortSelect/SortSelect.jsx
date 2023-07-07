import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { sort_ascending_price, sort_by_hits, sort_by_new, sort_by_promo, sort_descending_price, sort_fromA, sort_fromZ } from '../../store/reducers/favoriteSlice';
import { sort_select_values } from '../../data/data';
import s from './SortSelect.module.css'

export function SortSelect({ content }) {

	const [active, setActive] = useState(false)
	const refSelect = useRef();

	useEffect(() => {
		refSelect.value = sort_select_values[0].value;
	}, [content]);

	const dispatch = useDispatch();

	const toogleActive = (e) => {
		setActive(!active)
	}

	const handleSelectItem = (e) => {
		setActive(!active)
		refSelect.value = e.target.innerText;
		switch (e.target.dataset.value) {
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
		<div className={s.form_select}>
			<label className={s.select_label}>
				Sorted:
				<button
					className={s.select_button}
					ref={refSelect}
					onClick={toogleActive}
				>{refSelect.value}</button>
			</label>
			<ul className={`${s.dropdown_list} ${s[active ? 'active' : ""]} || ""}`}>
				{sort_select_values.map(option => <li
					className={s.dropdown_item}
					key={option.id}
					onClick={handleSelectItem}
					data-value={option.data}>
					{option.value}
				</li>)}
			</ul>
		</div >
	)
}
