import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useWindow from "../hooks/useWindow";
import {
	IoIosArrowUp,
	IoIosArrowBack,
	IoIosArrowForward,
	IoIosArrowDown,
} from "react-icons/io";
import {
	ComparisonCharacteristicList,
	ComparisonProduct,
	ComparisonSlider,
} from "../";
import s from "./ComparisonSection.module.css";

const SLIDE_WIDTH = 220;
const REST_PART = 376;

export function ComparisonSection() {
	const window = useWindow();
	const sliderWidth = window.windowWidth - REST_PART;

	const navigate = useNavigate();
	const total_amount = useSelector((store) => store.comparison.total_amount);
	if (!total_amount) {
		navigate("/Online_Store/#home");
	}

	const comparison_store = useSelector((state) => state.comparison);
	const comparison_list = comparison_store.comparison_list;
	const categories_titles = comparison_store.categories_titles;

	const [offset, setOffset] = useState(0);
	const [activeCategory, setActiveCategory] = useState(categories_titles[0]);
	const [isCharacteristicCommon, setCharacteristicCommon] = useState(false);

	const active_ctegory_products = comparison_list.filter(
		(product) => activeCategory === product.mainCategoryTitle
	);
	const active_category_characteristics =
		comparison_store.comparison_table.filter(
			(elem) => elem.category_title === activeCategory
		);

	const main_characteristics = active_category_characteristics.map(
		(elem) => elem.characters.main_characters
	);
	const common_characteristics = active_category_characteristics.map(
		(elem) => elem.characters.all_characters
	);

	const main_characteristics_keys = Object.keys(main_characteristics[0]);
	const main_characteristics_values = main_characteristics.map((elem) =>
		Object.values(elem)
	);
	const common_characteristics_keys = Object.keys(common_characteristics[0]);
	const common_characteristics_values = common_characteristics.map((elem) =>
		Object.values(elem)
	);

	const main_characteristis_list = useEffect(() => {
		setOffset(0);
	}, [activeCategory]);

	const handleRight = () => {
		const arrayLength = SLIDE_WIDTH * active_ctegory_products.length + offset;
		if (arrayLength > sliderWidth) {
			setOffset((currentOffset) => {
				const newOffset = currentOffset - SLIDE_WIDTH;
				const maxOffset = -(SLIDE_WIDTH * active_ctegory_products.length);
				return Math.max(newOffset, maxOffset);
			});
		}
	};

	const handleLeft = () => {
		setOffset((currentOffset) => Math.min(currentOffset + SLIDE_WIDTH, 0));
	};

	const showLess = () => {
		setCharacteristicCommon(true);
	};
	const showMore = () => {
		setCharacteristicCommon(false);
	};

	return (
		<section className={s.comparison}>
			<div className={s.comparison_top}>
				<h1 className="title" style={{ marginTop: "0" }}>
					Product comparison
				</h1>
			</div>

			<ul className={s.subcaregories_list}>
				{categories_titles.map((category) => (
					<li
						className={`${s.subcaregories_item} ${
							s[activeCategory === category ? "active" : ""] || ""
						}`}
						key={category}
						onClick={() => setActiveCategory(category)}
					>
						{category}
					</li>
				))}
			</ul>

			<div className={s.comparison_content}>
				<div className={s.pagination_list}>
					<button
						className={`${s.pagination_item} ${
							s[offset === 0 ? "unavailable" : ""] || ""
						}`}
						onClick={handleLeft}
					>
						<IoIosArrowBack />
					</button>
					<button
						className={`${s.pagination_item} ${
							s[Math.abs(offset) >= sliderWidth ? "unavailable" : ""] || ""
						}`}
						onClick={handleRight}
					>
						<IoIosArrowForward />
					</button>
				</div>

				<div className={s.comparison_image}>
					<button className={s.diff_btn}>show only differences</button>
					<ComparisonSlider
						products={active_ctegory_products}
						offset={offset}
						content="images"
					/>
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
							{(isCharacteristicCommon
								? common_characteristics_keys
								: main_characteristics_keys
							).map((character, index) => (
								<li key={index}>
									<p className={s.comparison_title_item}>{character}</p>
								</li>
							))}
						</ul>

						{window.windowWidth <= 860 ? (
							<ul className={s.characters_list}>
								{(isCharacteristicCommon
									? common_characteristics_keys
									: main_characteristics_keys
								).map((elem, index) => (
									<li className={s.characters_item} key={index}>
										<h3 className={s.character_key}>{elem}</h3>
										<ul className={s.values_list}>
											{active_category_characteristics.map(
												(character, index) => (
													<li 
													className={s.values_item}
													key={index}>
														<h4 className={s.product_title}>
															{character.product_title}
														</h4>
														<p className={s.character_value}>
															{character.characters.all_characters[elem]}
														</p>
													</li>
												)
											)}
										</ul>
									</li>
								))}
							</ul>
						) : (
							<ComparisonSlider
								products={
									isCharacteristicCommon
										? common_characteristics_values
										: main_characteristics_values
								}
								offset={offset}
								content="characters"
							/>
						)}

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
	);
}
