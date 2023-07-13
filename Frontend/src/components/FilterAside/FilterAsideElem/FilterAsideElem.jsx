import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { set_brand_data, set_color_data, set_country_data, set_delivery_data, set_price_data } from '../../../store/reducers/requestBodySlice'
import FilterPriceRange from '../../FilterPriceRange/FilterPriceRange'
import s from './FilterAsideElem.module.css'

export function FilterAsideElem({ title, data }) {
  const [activeFilter, setActiveFilter] = useState(false)
  // console.log(data)

  const dispatch = useDispatch()

  const changeActive = () => {
    setActiveFilter(!activeFilter)
  }

  const requestBody = useSelector(state => state.requestBody)
  console.log(requestBody)

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
      dispatch(set_brand_data(elem))
    }

    if (title === 'Delivery Type') {
      dispatch(set_delivery_data(elem))
    }
  }

  const handleChange = (title, elem) => {
    // e.preventDefault();
    setRequestBody(title, elem)

  }

  return (
    <li className={s.wrapper}>
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
