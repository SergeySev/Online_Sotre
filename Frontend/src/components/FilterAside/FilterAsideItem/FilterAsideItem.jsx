import React, { useState } from 'react'
import s from './FilterAsideItem.module.css'

export default function FilterAsideItem({ title }) {
  const temp_list = ['item1', 'item2', 'item3', 'item4']
  const [activeFilter, setActiveFilter] = useState(false)

  return (
    <li className={!activeFilter ? s.filter_item : s.filter_item_active} onClick={() => setActiveFilter(!activeFilter)}>{title}
      <ul className={s.filter_item_list}>
        {temp_list.map((elem, index) => {
          return <form key={index}>
            <input type={'checkbox'} name={elem} className={s.filter_checkbox} />
            <label>{elem}</label>
          </form>
        })}
      </ul>
    </li>
  )
}
