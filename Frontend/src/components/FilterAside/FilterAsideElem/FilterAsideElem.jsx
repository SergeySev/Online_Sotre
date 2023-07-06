import React, { useState } from 'react'
import s from './FilterAsideElem.module.css'

export function FilterAsideElem({ title, data }) {
  const [activeFilter, setActiveFilter] = useState(false)

  const changeActive = () => {
    setActiveFilter(!activeFilter)
  }

  const handleChange = (title, elem) => {
    // e.preventDefault();
    console.log(title, elem)
  }

  return (
    <li className={s.wrapper}>
      <div className={!activeFilter ? s.tab : s.tab_active} onClick={changeActive}>{title}</div>
      <div className={!activeFilter ? s.collapse : s.collapse_open}>
        <form className={s.tab_form}>
          {data.map((elem, index) => {
            return <label key={index}>
              <input type={'checkbox'} name={elem} className={s.filter_checkbox} onChange={(e) => handleChange(title, elem)} />
              <span className={s.checkmark}></span>
              {elem}
            </label>
          })}
        </form>

      </div>
    </li>
  )
}
