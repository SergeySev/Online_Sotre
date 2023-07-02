import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetch_filter_data } from '../../requests/requests';
import s from './FilterAside.module.css'
import FilterAsideItem from './FilterAsideItem/FilterAsideItem';

export function FilterAside() {

	const dispatch = useDispatch()
	const filters = ['Price, $', 'Brand', 'Country Made', 'Color', 'Delivery Type']

	useEffect(() => dispatch(fetch_filter_data()))
	const filter_data = useSelector(store => store.filter)
	console.log((filter_data));

	return (
		<ul className={s.aside_wrapper}>
			{filters.map((elem, index) => <FilterAsideItem key={index} title={elem} />)}
		</ul>
	)
}
