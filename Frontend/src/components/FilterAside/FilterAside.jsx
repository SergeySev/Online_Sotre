import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetch_filter_data } from '../../requests/requests';
import { FilterAsideItem } from './';
import s from './FilterAside.module.css'

export function FilterAside() {

	const dispatch = useDispatch()

	useEffect(() => dispatch(fetch_filter_data()), [dispatch])
	const filter_data = useSelector(store => store.filter_data)

	return (
		<ul className={s.aside_wrapper}>
			{Object.keys(filter_data).map((elem, index) => {
				let data = [];
				console.log(elem)
				if (elem === 'Brands') {
					data = filter_data['Brands']
				} else if (elem === 'Color') {
					data = filter_data['Color']
				} else if (elem === 'Delivery Type') {
					data = filter_data['Delivery Type']
				} else if (elem === 'Made Country') {
					data = filter_data['Made Country']
				}
				return <FilterAsideItem
					key={index}
					title={elem}
					data={data}
				/>
			}
			)}
		</ul>
	)
}
