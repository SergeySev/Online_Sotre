import arrow from './assets/arrow-left.png'
import s from './BannerItem.module.css'

export default function BannerItem({ image, text, isTitleBig, isImageBig }) {

	return (
		<div className={`${s.banner_item} ${s[isImageBig ? "big_image" : ''] || ''}`}>
			<div className={s.banner_item}>
				<img className={s.banner_image} src={image} alt={text} loading='lazy' />
			</div>
			<p className={isTitleBig ? s.banner_title_big : s.banner_title}>{text}</p>
			<div className={s.banner_link}>
				<img src={arrow} className={s.arrow} alt='arrow' />
			</div>
		</div>
	)
}
