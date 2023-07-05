import s from './SortSelect.module.css'

export function SortSelect() {
	return (
		<>
			<p>Sort:</p>
			<select className={s.select}>
				<option>New first</option>
				<option>Discount first</option>
				<option>Ascending price</option>
				<option>Descending price</option>
			</select>
		</>
	)
}
