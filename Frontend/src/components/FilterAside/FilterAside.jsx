import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetch_filter_data } from '../../requests/requests';
import s from './FilterAside.module.css'
import { FilterAsideElem } from './FilterAsideElem/FilterAsideElem';

export function FilterAside() {

	const dispatch = useDispatch()

	useEffect(() => dispatch(fetch_filter_data()), [dispatch])
	const filter_data = useSelector(store => store.filter_data)

	return (
		<ul className={s.aside_wrapper}>
			{Object.keys(filter_data).map((elem, index) => {
				let data = [];
				if (elem === 'Price') {
					data = filter_data['Price']
				} else if (elem === 'Brands') {
					data = filter_data['Brands']
				} else if (elem === 'Color') {
					data = filter_data['Color']
				} else if (elem === 'Delivery Type') {
					data = filter_data['Delivery Type']
				} else if (elem === 'Made Country') {
					data = filter_data['Made Country']
				}
				return <FilterAsideElem
					key={index}
					title={elem}
					data={data}
				/>
			}
			)}
		</ul>
	)
}
