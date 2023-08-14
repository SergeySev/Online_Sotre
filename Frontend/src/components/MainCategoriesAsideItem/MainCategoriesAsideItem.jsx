import s from './MainCategoriesAsideItem.module.css'

export function MainCategoriesAsideItem({ category, changeProductList }) {
	const { title, subCategories } = category;
	return (
		<li className={`${s.category_item} ${s.aside_subtitle}`}>{title}
			<ul className={s.category_item_list}>
				{subCategories.map(elem =>
					<li key={elem.id} onClick={() => changeProductList(elem.id)}>{elem.title}</li>)}
			</ul>
		</li>
	)
}
