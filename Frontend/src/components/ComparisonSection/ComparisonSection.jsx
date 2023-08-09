import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IoIosArrowUp, IoIosArrowBack, IoIosArrowForward, IoIosArrowDown } from 'react-icons/io';
import { fetch_main_categories } from "../../requests/requests";
import { ComparisonProduct } from "../";
import s from './ComparisonSection.module.css'

export function ComparisonSection() {

	//const dispatch = useDispatch();
	const navigate = useNavigate();
	const total_amount = useSelector(store => store.comparison.total_amount)
	if (!total_amount) {
		navigate('/Online_Store/#home')
	}
	const comparison_products = useSelector(state => state.comparison.comparison_list);
	const products_title = [... new Set(comparison_products.map(item => item.mainCategoryTitle))];
	console.log("🚀 ~ file: ComparisonSection.jsx:19 ~ ComparisonSection ~ products_title:", products_title)

	const [activeCategory, setActiveCategory] = useState(products_title[0]);

	useEffect(() => {
		setActiveCategory(products_title[0]);
	}, [comparison_products])

	console.log("🚀 ~ file: ComparisonSection.jsx:22 ~ ComparisonSection ~ activeCategory:", activeCategory)
	const active_ctegory_products = comparison_products.filter(product => activeCategory === product.mainCategoryTitle)
	console.log("🚀 ~ file: ComparisonSection.jsx:23 ~ ComparisonSection ~ active_ctegory_products:", active_ctegory_products)

	return (
		<section className={s.comparison}>
			<div className={s.comparison_top}>
				<h1 className='title' style={{ marginTop: "0" }}>Product comparison</h1>
			</div>
			<ul className={s.subcaregories_list}>
				{products_title.map(category =>
					<li
						className={`${s.subcaregories_item} ${s[activeCategory === category ? 'active' : ''] || ''}`}
						key={category}
						onClick={() => setActiveCategory(category)}
					>
						{category}
					</li>)}
			</ul>
			<div className={s.comparison_content}>
				<div className={s.image_block}>
					<div className={s.slider_block}>
						<button className={s.diff_btn}>show only differences</button>
						<div className={s.pagination_list}>
							<span className={s.pagination_item}>
								<IoIosArrowBack />
							</span>
							<span className={s.pagination_item}>
								<IoIosArrowForward />
							</span>
						</div>
					</div>
					<div className={s.img_slider}>
						<ul className={s.img_list}>
							{active_ctegory_products.map(product =>
								<ComparisonProduct key={product.id} product={product} />
							)}
						</ul>
					</div>
				</div>
				<div className={s.content_block}>
					<div className={s.content_top}>
						<h2 className={s.subtitle_top}>Main characteristics</h2>
						<IoIosArrowUp className={s.arrow} />
					</div>

					<table className={s.table}>
						{ }
					</table>

					<div className={s.content_bottom}>
						<h2 className={s.subtitle_bottom}>Additional characteristics</h2>
						<IoIosArrowDown className={s.arrow} />
					</div>
				</div>
			</div>

		</section>
	)
}
