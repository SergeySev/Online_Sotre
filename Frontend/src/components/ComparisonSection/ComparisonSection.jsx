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
	const [isCharacteristicCommon, setCharacteristicCommon] = useState(false);
	// получаем массив продуктов активной категории
	//const active_ctegory_products = useSelector(state => state.comparison.comparison_list);

	const active_ctegory_products = comparison_products.filter(product => activeCategory === product.mainCategoryTitle);
	//console.log("🚀 ~ file: ComparisonSection.jsx:33 ~ ComparisonSection ~ active_ctegory_products:", active_ctegory_products)
	// получаем массив с основными характеристиками продуктов активной категории
	const products_main_characteristics = active_ctegory_products.map(product => {
		const main_characters = {
			brand: product.brand,
			description: product.description,
			color: product.colour,
		}
		return main_characters;
	});
	//console.log("🚀 ~ file: ComparisonSection.jsx:45 ~ ComparisonSection ~ products_main_characteristics:", products_main_characteristics)

	// получаем массив с характеристиками продуктов активной категории
	const products_characteristics = active_ctegory_products.map(product => product.characteristicDto);
	//console.log("🚀 ~ file: ComparisonSection.jsx:40 ~ ComparisonSection ~ products_characteristics:", products_characteristics)
	//const characteristics_entries = active_ctegory_products.map(product => Object.entries(product.characteristicDto));
	//console.log("🚀 ~ file: ComparisonSection.jsx:36 ~ ComparisonSection ~ products_characteristics:", products_characteristics)

	// получаем массив с заголовками характеристик продуктов активной категории
	const main_characteristics_keys =Object.keys(products_main_characteristics[0])
	//console.log("🚀 ~ file: ComparisonSection.jsx:56 ~ main_characteristics_keys:", main_characteristics_keys)
	const additional_keys  = Object.keys(products_characteristics[0])
	//console.log("🚀 ~ file: ComparisonSection.jsx:58 ~ additional_keys:", additional_keys)
	const characteristics_keys = [...main_characteristics_keys, ...additional_keys]
	//console.log("🚀 ~ file: ComparisonSection.jsx:60 ~ characteristics_keys:", characteristics_keys)




	const main_caracter_list = products_main_characteristics.map(caracters => Object.values(caracters))
	//console.log("🚀 ~ file: ComparisonSection.jsx:63 ~ main_caracter_list:", main_caracter_list)
	const additional_caracter_list = products_characteristics.map(caracters => Object.values(caracters))
	//console.log("🚀 ~ file: ComparisonSection.jsx:65 ~ additional_caracter_list:", additional_caracter_list)
	
	const caracter_list = [...Object.values(main_caracter_list), ...Object.values(additional_caracter_list)]
	console.log("🚀 ~ file: ComparisonSection.jsx:65 ~ caracter_list:", caracter_list)

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

	const showLess = () => { 
		setCharacteristicCommon(true)
	}
	const showMore = () => {
		setCharacteristicCommon(false)
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
						<p>Main characteristics</p>
						<button className={s.characters_arrow_btn}>
							<IoIosArrowUp className={s.arrow} onClick={showMore} />
						</button>
					</div>

					<div className={s.comparison_cahacters}>
						<ul className={s.comparison_titles}>
							{/*{commont_keys.map((character, index) =>*/}
							{/*{main_characteristics_keys.map((character, index) =>
								<li key={index}>
									<p className={s.comparison_title_item}>
										{character}
									</p>
								</li>)}*/}

								{(isCharacteristicCommon? characteristics_keys: main_characteristics_keys).map((character, index) =>
								<li key={index}>
									<p className={s.comparison_title_item}>
										{character}
									</p>
								</li>)}
						</ul>
						<ComparisonSlider 
						products={isCharacteristicCommon ? caracter_list : main_caracter_list} 
						offset={offset} 
						content='characters'
						/>
					</div>


					<div className={s.characters_accordeon}>
						<p>Additional characteristics</p>
						<button className={s.characters_arrow_btn}>
							<IoIosArrowDown className={s.arrow} onClick={showLess} />
						</button>
					</div>
				</div>
			</div>

		</section>
	)
}
