import prev from './assets/arrow-left.png'
import next from './assets/arrow-right.png'
import s from './Pagination.module.css'

export function Pagination({ setCurrentPage, countElem, currentPage, pagination_content }) {

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

	const styleClass = pagination_content === "subcategories" ? 'white' : ''

	return (
		<div className={`${s.pagination} ${s[styleClass] || ""}`}>
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
