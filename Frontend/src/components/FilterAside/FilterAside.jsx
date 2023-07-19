import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetch_filter_data, fetch_filtered_subcategory_products } from '../../requests/requests';
import s from './FilterAside.module.css'
import { FilterAsideElem } from './FilterAsideElem/FilterAsideElem';

export function FilterAside({ subcategory_title }) {
	const [request_url, setRequest_url] = useState('')
	// const [request_url, setRequest_url] = useState('http://localhost:8080/api/v1/product/byFilter?page=1&size=30&subCategoryTitle=')

	const dispatch = useDispatch()

	useEffect(() => dispatch(fetch_filter_data()), [dispatch])
	const filter_data = useSelector(store => store.filter_data)
	// const requestBody = useSelector(state => state.requestBody)

	useEffect(() => {
		if (request_url !== 'http://localhost:8080/api/v1/product/byFilter?page=1&size=30&subCategoryTitle=') {
			dispatch(fetch_filtered_subcategory_products(request_url))
		}
		// console.log('request_url has changed')
		console.log(request_url)

	}, [request_url])



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
					subcategory_title={subcategory_title}
					setRequest_url={setRequest_url}
				/>
			}
			)}
		</ul>
	)
}
