import React, { useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import s from './CategoryItemGallery.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { fetch_sub_categories_by_main } from '../../requests/requests';
import { ProductItem } from '../';
import './slick_styles.css'
import prevArrow from '../../media/prevArrow.png'
import nextArrow from '../../media/nextArrow.png'

export default function CategoryItemGallery({ id, title }) {

	const CustomPrevArrow = (props) => {
		const { className, style, onClick } = props;
		return (
			<div
				className={className}
				style={{ ...style, width: '40px', height: '40px', backgroundImage: `url(${prevArrow})` }}
				onClick={onClick}
			/>
		);
	}

	const CustomNextArrow = (props) => {
		const { className, style, onClick } = props;
		return (
			<div
				className={className}
				style={{ ...style, width: '40px', height: '40px', backgroundImage: `url(${nextArrow})` }}
				onClick={onClick}
			/>
		);
	}

	let settings = {
		dots: false,
		infinite: true,
		speed: 1000,
		slidesToShow: 2,
		slidesToScroll: 1,
		prevArrow: <CustomPrevArrow />,
		nextArrow: <CustomNextArrow />,
		responsive: [
			{
				breakpoint: 1420,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 1120,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 790,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	}

	const dispatch = useDispatch();
	const sub_categories = useSelector(store => store.subcategories)

	useEffect(() => {
		dispatch(fetch_sub_categories_by_main(id))
	}, [id])

	return (
		<>
			<li className={s.category_header}>
				<h2>{title}</h2>
				<div className='category_controls'>
					<Slider {...settings}>
						{sub_categories.map(elem => <ProductItem product={elem.productDtoList[0]} key={elem.id} />)}
					</Slider>
				</div>
			</li>
		</>

	)
}