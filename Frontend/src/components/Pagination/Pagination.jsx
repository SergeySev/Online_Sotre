import React from 'react'
import s from './Pagination.module.css'

export default function Pagination({ setCurrentPage, countElem, currentPage }) {

  const numberPage = [];
  for (let i = 1; i < countElem + 1; i++) {
    numberPage.push(i)
  }

  return (
    <div className={s.pagination}>
      {numberPage.map(elem =>
        <div
          key={elem}
          className={elem === currentPage ? s.pagination_item_active : s.pagination_item}
          onClick={() => setCurrentPage(elem)}
        >
          {elem}
        </div>
      )}
    </div>
  )
}
