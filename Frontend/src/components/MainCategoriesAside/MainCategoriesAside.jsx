import { MainCategoriesAsideItem } from '../';
import s from './MainCategoriesAside.module.css'

export function MainCategoriesAside({ categories, changeProductList }) {

	return (
		<ul className={s.aside_wrapper}>
			{categories.map((elem, index) =>
				<MainCategoriesAsideItem category={elem} key={index} changeProductList={changeProductList} />
			)}
		</ul>
	)
}
