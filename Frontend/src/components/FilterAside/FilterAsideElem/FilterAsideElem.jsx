import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { set_brand_data, set_color_data, set_country_data, set_delivery_data, set_price_data } from '../../../store/reducers/requestBodySlice'
import FilterPriceRange from '../../FilterPriceRange/FilterPriceRange'
import s from './FilterAsideElem.module.css'

export function FilterAsideElem({ title, data, subcategory_title, setRequest_url, brand }) {
	const base_filter_url = !brand ? 'http://localhost:8080/api/v1/product/byFilterWithSubCategory?page=1&size=30'
		: `http://localhost:8080/api/v1/product/byFilterWithBrand?page=1&size=30&brandTitle=${brand}`;

	const subcategory_string = `&subCategoryTitle=${subcategory_title}`;
	let price_range_string = [];
	let brands_string = '';
	let country_string = '';
	let color_string = '';
	let delivery_string = '';

	const [activeFilter, setActiveFilter] = useState(false)

	const dispatch = useDispatch()

	const changeActive = () => {
		setActiveFilter(!activeFilter)
	}

	const requestBody = useSelector(state => state.requestBody)

	const setRequestBody = (title, elem) => {

		if (title === 'Price') {
			dispatch(set_price_data(elem))
		}

		if (title === 'Made Country') {
			dispatch(set_country_data(elem))
		}

		if (title === 'Color') {
			dispatch(set_color_data(elem))
		}

		if (title === 'Brands') {
			if (!location) {
				dispatch(set_brand_data(elem))
			}
		}

		if (title === 'Delivery Type') {
			dispatch(set_delivery_data(elem))
		}
	}

	const handleChange = (title, elem) => {
		setRequestBody(title, elem)
	}

	useEffect(() => {
		for (let key in requestBody) {
			if (key === 'priceRange') {
				if (requestBody.priceRange.length !== 0) {
					price_range_string = `&priceFrom=${requestBody.priceRange[0]}&priceTo=${Math.ceil(requestBody.priceRange[1])}`
					// console.log(price_range_string)
				}
			}

			if (key === 'brands') {
				if (requestBody.brands.length !== 0) {
					for (let i = 0; i < requestBody.brands.length; i++) {
						brands_string += `&brandTitles=${requestBody.brands[i]}`
						// console.log(brands_string)
					}
				}
			}
			if (key === 'country') {
				if (requestBody.country.length !== 0) {
					for (let i = 0; i < requestBody.country.length; i++) {
						country_string += `&madeCountries=${requestBody.country[i]}`
						// console.log(country_string)
					}
				}
			}
			if (key === 'color') {
				if (requestBody.color.length !== 0) {
					for (let i = 0; i < requestBody.color.length; i++) {
						color_string += `&colours=${requestBody.color[i]}`
						// console.log(color_string)
					}
				}
			}
			if (key === 'delivery') {
				if (requestBody.delivery.length !== 0) {
					for (let i = 0; i < requestBody.delivery.length; i++) {
						delivery_string += `&deliveryTypes=${requestBody.delivery[i]}`
						// console.log(delivery_string)
					}
				}
			}
		}
		if (!brand) {
			setRequest_url(base_filter_url + subcategory_string + brands_string + country_string + color_string + price_range_string);
		} else {
			setRequest_url(base_filter_url + brands_string + country_string + color_string + price_range_string);
		}


	}, [requestBody])

	return (
		<li className={`${s.wrapper} ${s.aside_subtitle}`}>
			<div className={!activeFilter ? s.tab : s.tab_active} onClick={changeActive}>{title}</div>
			<div className={!activeFilter ? s.collapse : s.collapse_open}>
				<form className={s.tab_form}>
					{title !== 'Price' ? data.map((elem, index) => {

						return <label key={index}>
							<input type={'checkbox'} name={elem} className={s.filter_checkbox} onChange={(e) => handleChange(title, elem)} />
							<span className={s.checkmark}></span>
							{elem}
						</label>


					})
						: <FilterPriceRange min={data[0]} max={data[1]} setRequestBody={setRequestBody} />
					}
				</form>

			</div>
		</li>
	)
}

