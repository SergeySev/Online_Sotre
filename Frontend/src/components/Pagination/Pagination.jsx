import React from 'react'
import s from './Pagination.module.css'
import prev from './assets/arrow-left.png'
import next from './assets/arrow-right.png'

export default function Pagination({ setCurrentPage, countElem, currentPage }) {

  const numberPage = [];
  for (let i = 1; i < countElem + 1; i++) {
    numberPage.push(i)
  }

  const decrement_cur_page = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }
  const increment_cur_page = () => {
    if (currentPage < countElem) {
      setCurrentPage(currentPage + 1)
    }
  }

  console.log(countElem);
  console.log(currentPage);

  return (
    <div className={s.pagination}>
      <img src={prev} alt={'arrow-left'} className={s.arrow_img} onClick={decrement_cur_page} />
      {numberPage.map(elem =>
        <div
          key={elem}
          className={elem === currentPage ? s.pagination_item_active : s.pagination_item}
          onClick={() => setCurrentPage(elem)}
        >
          {elem}
        </div>
      )}
      <img src={next} alt={'arrow-right'} className={s.arrow_img} onClick={increment_cur_page} />
    </div>
  )
}
