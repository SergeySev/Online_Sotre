import React, { useState } from 'react'
import s from './FilterAsideItem.module.css'

export function FilterAsideItem({ title, data }) {

  const [activeFilter, setActiveFilter] = useState(false)
  const [message, setMessage] = useState('');

  const changeActive = () => {
    setActiveFilter(!activeFilter)
  }

  const handleChange = (e, elem) => {
    // e.preventDefault();
    console.log(elem)
  }

  return (
    <li>
      <div className={!activeFilter ? s.filter_item : s.filter_item_active} onClick={changeActive}>{title}</div>
      <ul className={s.filter_item_list}>
        {data.map((elem, index) => {
          return <form key={index} >
            <label>{elem}
              <input type={'checkbox'} name={elem} className={s.filter_checkbox} onChange={(e) => handleChange(e, elem)} />
              <span className={s.checkmark}></span>
            </label>
          </form>
        })}
      </ul>

    </li>
  )
}
