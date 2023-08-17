import { ComparisonCharacteristicList } from '../ComparisonCharacteristicList/ComparisonCharacteristicList';
import { ComparisonProduct } from '../ComparisonProduct/ComparisonProduct';
import useWindow from '../hooks/useWindow';
import s from './ComparisonSlider.module.css'

const SLIDE_WIDTH = 220;
const REST_PART = 376;

export function ComparisonSlider({ products, offset, content }) {
//console.log("🚀 ~ file: ComparisonSlider.jsx:10 ~ ComparisonSlider ~ products:", products)

	const window = useWindow()
	const sliderWidtn = window.windowWidth - REST_PART;

	return (
		//<div className={`${s.slider_block } ${s[content? content : ''] || ''}`}>
		//	<button className={s.diff_btn}>show only differences</button>
			<div
				style={{ maxWidth: `${sliderWidtn}px` }}
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
		//</div>
	)
}
