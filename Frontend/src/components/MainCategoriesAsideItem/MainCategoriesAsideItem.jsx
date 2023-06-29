import s from './MainCategoriesAsideItem.module.css'

export function MainCategoriesAsideItem({ category, changeProductList }) {
	console.log(category)
	const { title, subCategories } = category;
	return (
		<li className={s.category_item}>{title}
			<div className={s.category_item_list}>
				<ul>
					{subCategories.map(elem =>
						<li key={elem.id} onClick={() => changeProductList(elem.id)}>{elem.title}</li>)}
				</ul>

			</div>
		</li>
	)
}
