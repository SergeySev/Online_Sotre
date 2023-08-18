import { ComparisonCharacteristicList } from '../ComparisonCharacteristicList/ComparisonCharacteristicList';
import { ComparisonProduct } from '../ComparisonProduct/ComparisonProduct';
import useWindow from '../hooks/useWindow';
import s from './ComparisonSlider.module.css'

const REST_PART = 376;

export function ComparisonSlider({ products, offset, content }) {

	const window = useWindow()
	//const sliderWidtn = window.windowWidth - REST_PART;
	const current_width = window.windowWidth - REST_PART
	const sliderWidtn = window.windowWidth > 860 ? `${current_width}px`: `100%`;
	//const sliderWidtn = current_width;

	//console.log("🚀 ~ file: ComparisonSlider.jsx:14 ~ ComparisonSlider ~ sliderWidtn:", sliderWidtn)
	return (
			<div
				style={{ maxWidth: {sliderWidtn}}}
					className={s.slider}>
				<ul
					className={`${s.slider_list } ${s[content? content : ''] || ''}`}
					style={{
						transform: `translateX(${offset}px)`
					}}
				>
					{content === "images" ?
							products.map((product, index) => 
						<ComparisonProduct key={index} product={product} />)
						:
							products.map((product, index) => 
						<ComparisonCharacteristicList key={index} characters={product} />)
					}
				</ul>
			</div>
	)
}
