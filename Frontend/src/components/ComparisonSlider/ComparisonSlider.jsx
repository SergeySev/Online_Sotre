import { ComparisonCharacteristicList } from '../ComparisonCharacteristicList/ComparisonCharacteristicList';
import { ComparisonProduct } from '../ComparisonProduct/ComparisonProduct';
import useWindow from '../hooks/useWindow';
import s from './ComparisonSlider.module.css'

const REST_PART = 376;

export function ComparisonSlider({ products, offset, content }) {

	const window = useWindow()
	const current_width = window.windowWidth - REST_PART
	const sliderWidtn = window.windowWidth > 860 ? `${current_width}px` : `100%`;

	return (
		<div
			style={{ maxWidth: { sliderWidtn } }}
			className={`${s.slider} ${s[content ? content : ''] || ''}`}>
			<ul
				className={`${s.slider_list} ${s[content ? content : ''] || ''}`}
				style={{
					transform: `translateX(${window.windowWidth <= 860 && content === 'characters' ? 0 : offset}px)`
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
