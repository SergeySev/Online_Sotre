import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Slider from 'react-slick'
import { fetch_brands } from '../../requests/requests';
import BrandSliderItem from '../BrandSliderItem/BrandSliderItem'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import s from './BrandSlider.module.css'
import { NavLink } from 'react-router-dom';

export function BrandSlider() {

	const dispatch = useDispatch()
	const brands = useSelector(store => store.brands)
	const settings = {
		dots: false,
		infinite: true,
		speed: 1000,
		slidesToShow: 6,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1420,
				settings: {
					slidesToShow: 5,
				}
			},
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 4,
				}
			},
			{
				breakpoint: 980,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 690,
				settings: {
					slidesToShow: 2,
					arrows: false
				}
			}
		]
	}

	useEffect(() => dispatch(fetch_brands()), [])

	return (
		<section className={s.brand_slider}>
			<div className='container'>
				<NavLink to={'/brands'}><h2 className={s.slider_title}>Our Brands</h2></NavLink>
				<Slider {...settings}>
					{brands.map(elem => <NavLink to={`/brands/${elem.title}`} key={elem.id}><BrandSliderItem {...elem} key={elem.id} /></NavLink>)}
				</Slider>
			</div>
		</section>
	)
}
