import { NavLink } from 'react-router-dom'
import s from './SubCategoryItem.module.css'

export function SubCategoryItem({ product, id }) {

	return (
		<div className={s.subcategory_item}>
			<img src={product.imageLink} alt={product.title} className={s.subcategory_img} />
			{<NavLink to={`/catalog/${id}/${product.id}`}><p className={s.subcategory_title}>{product.title}</p></NavLink>}
		</div>
	)
}
