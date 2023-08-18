import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useWindow from "../hooks/useWindow";
import { IoIosArrowUp, IoIosArrowBack, IoIosArrowForward, IoIosArrowDown } from 'react-icons/io';
import { ComparisonCharacteristicList, ComparisonProduct, ComparisonSlider } from "../";
import s from './ComparisonSection.module.css'

const SLIDE_WIDTH = 220;
const REST_PART = 376;

export function ComparisonSection() {

	const window = useWindow()
	const sliderWidth = window.windowWidth - REST_PART;
	//console.log("🚀 ~ file: ComparisonSection.jsx:16 ~ ComparisonSection ~ sliderWidth:", sliderWidth)

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
	//const active_ctegory_products = useSelector(state => state.comparison.comparison_list);

	const active_ctegory_products = comparison_products.filter(product => activeCategory === product.mainCategoryTitle);
	//console.log("🚀 ~ file: ComparisonSection.jsx:33 ~ ComparisonSection ~ active_ctegory_products:", active_ctegory_products)

	// получаем массив с характеристиками продуктов активной категории
	const products_characteristics = active_ctegory_products.map(product => product.characteristicDto);
	const characteristics_entries = active_ctegory_products.map(product => Object.entries(product.characteristicDto));
	//console.log("🚀 ~ file: ComparisonSection.jsx:36 ~ ComparisonSection ~ products_characteristics:", products_characteristics)

	// получаем массив с заголовками характеристик продуктов активной категории
	const characteristics_keys = Object.keys(products_characteristics[0])

	const caracter_list = products_characteristics.map(caracters => Object.values(caracters))

	// устанавливаем первый продукт активной категории активным
	const [offset, setOffset] = useState(0);

	useEffect(() => {
		setActiveCategory(products_title[0]);
	}, [comparison_products])

	useEffect(() => {
		setOffset(0);
	}, [activeCategory])


	const handleRight = () => {
		const arrayLength = SLIDE_WIDTH * (active_ctegory_products.length) + offset
	if (arrayLength > sliderWidth) {
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
						onClick={() => setActiveCategory(category)}>
						{category}
					</li>)}
			</ul>

			<div className={s.comparison_content}>

				<div className={s.pagination_list}>
					<button
						className={`${s.pagination_item} ${s[offset === 0 ? "unavailable" : ''] || ''}`}
						onClick={handleLeft}>
						<IoIosArrowBack />
					</button>
					<button
						className={`${s.pagination_item} ${s[Math.abs(offset) >= sliderWidth ? "unavailable" : ''] || ''}`}
						onClick={handleRight}
					>
						<IoIosArrowForward />
					</button>
				</div>

				<div className={s.comparison_image}>
					<button className={s.diff_btn}>show only differences</button>
					<ComparisonSlider products={active_ctegory_products} offset={offset} content='images' />
				</div>

				<div className={s.content_block}>
					<div className={s.characters_accordeon}>
						<h2 className={s.subtitle_top}>Main characteristics</h2>
						<IoIosArrowUp className={s.arrow} />
					</div>

					<div className={s.comparison_cahacters}>
						<ul className={s.comparison_titles}>
							{characteristics_keys.map((character, index) =>
								<li key={index}>
									<p className={s.comparison_title_item}>
										{character}
									</p>
								</li>)}
						</ul>
						<ComparisonSlider products={caracter_list} offset={offset}/>
					</div>


					<div className={s.characters_accordeon}>
						<h2 className={s.subtitle_bottom}>Additional characteristics</h2>
						<IoIosArrowDown className={s.arrow} />
					</div>
				</div>
			</div>

		</section>
	)
}
