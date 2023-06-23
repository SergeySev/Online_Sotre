import React, { useEffect, useState } from 'react';
import s from './OffersSection.module.css';
import { offers_menu } from '../../data/data';
import ProductItem from '../ProductItem/ProductItem';
import Slider from 'react-slick';
import './slick_styles.css'

export default function OffersSection() {

	const settings = {
		dots: true,
		infinite: true,
		speed: 1000,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1420,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 1100,
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

	const [offers, setOffers] = useState([])
	// const [tag, setTag] = useState('NEW')
	const [activeElement, setActiveElement] = useState('');

	useEffect(() => {
		fetch('http://localhost:8080/api/v1/product/novelties?page=0&size=6')
			.then(res => res.json())
			.then(data => setOffers(data.content))
	}, [])

	const handleClick = (elem) => {
		setActiveElement(elem)
		if (elem === 'Novelties') {
			// setTag('NEW')
			fetch('http://localhost:8080/api/v1/product/novelties?page=0&size=6')
				.then(res => res.json())
				.then(data => setOffers(data.content))

		} else if (elem === 'Promotions') {
			// setTag('PROMO')
			fetch('http://localhost:8080/api/v1/product/promo?page=0&size=6')
				.then(res => res.json())
				.then(data => setOffers(data.content))

		} else {
			// setTag('HIT')
			fetch('http://localhost:8080/api/v1/product/hit?page=0&size=6')
				.then(res => res.json())
				.then(data => setOffers(data.content))
		}
	}

	return (
		<>
			<div id="novelties" className={s.offers_section}>
				<div className='container'>
					<div className={s.offers_section_inner}>
						{offers_menu.map(elem => <h2 className={activeElement === elem.title ? 'active' : ''} key={elem.id} onClick={() => handleClick(elem.title)}>{elem.title}</h2>)}
					</div>
				</div>

			</div>
			<div className={s.tab_inner}>
				<div className='container'>
					<div className={s.slider_inner}>
						<Slider {...settings}>
							{offers.map(elem => <ProductItem product={elem} key={elem.id} />)}
						</Slider>
					</div>
				</div>

			</div>
		</>
	)
}
