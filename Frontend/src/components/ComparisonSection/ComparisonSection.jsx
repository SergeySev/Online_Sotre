import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useWindow from "../hooks/useWindow";
import { IoIosArrowUp, IoIosArrowBack, IoIosArrowForward, IoIosArrowDown } from 'react-icons/io';
import { ComparisonProduct } from "../";
import s from './ComparisonSection.module.css'

const SLIDE_WIDTH = 220;
const REST_PART = 376;

export function ComparisonSection() {

	const window = useWindow()
	const sliderWidtn = window.windowWidth - REST_PART;

	const navigate = useNavigate();
	const total_amount = useSelector(store => store.comparison.total_amount)
	if (!total_amount) {
		navigate('/Online_Store/#home')
	}
	//получаем массив сохраненных продуктов
	const comparison_products = useSelector(state => state.comparison.comparison_list);
	// создаем массив названий категорий
	const products_title = [... new Set(comparison_products.map(item => item.mainCategoryTitle))];

	// устанавливаем первый заголовок как активный
	const [activeCategory, setActiveCategory] = useState(products_title[0]);
	// получаем массив продуктов активной категории
	const active_ctegory_products = comparison_products.filter(product => activeCategory === product.mainCategoryTitle);

	// устанавливаем первый продукт активной категории активным
	const [offset, setOffset] = useState(0);


	useEffect(() => {
		setActiveCategory(products_title[0]);
	}, [comparison_products])

	useEffect(() => {
		setOffset(0);
	}, [activeCategory])


	const handleRight = () => {
		const arrayLength = SLIDE_WIDTH * (active_ctegory_products.length - 1) + offset
		if (arrayLength > sliderWidtn) {
			setOffset(currentOffset => {
				const newOffset = currentOffset - SLIDE_WIDTH
				const maxOffset = -(SLIDE_WIDTH * (active_ctegory_products.length))
				return Math.max(newOffset, maxOffset)
			})
		}
	}

	const handleLeft = () => {
		setOffset(currentOffset => Math.min(currentOffset + SLIDE_WIDTH, 0)
		)
	}


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

				<div className={s.pagination_list}>
					<span
						className={`${s.pagination_item} ${s[offset === 0 ? "unavailable" : ''] || ''}`}
						onClick={handleLeft}
					>
						<IoIosArrowBack />
					</span>
					<span
						className={s.pagination_item}
						//className={`${s.pagination_item} ${s[offset === 0 ? "unavailable" : ''] || ''}`}
						onClick={handleRight}
					>
						<IoIosArrowForward />
					</span>
				</div>
				<div className={s.slider_block}>
					<button className={s.diff_btn}>show only differences</button>
					<div
						style={{ maxWidth: `${sliderWidtn}px` }}
						className={s.img_slider}>
						<ul
							className={s.img_list}
							style={{
								transform: `translateX(${offset}px)`
							}}
						>
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
