import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Slider from 'react-slick';
import { fetch_offers_products } from '../../requests/requests';
import { toggle_offer } from '../../store/reducers/navSlice';
import { ProductItem } from '../';
import './slick_styles.css'
import s from './OffersSection.module.css';

export function OffersSection() {

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
					arrows: false
				}
			}
		]
	}

	const dispatch = useDispatch();
	const { active_tag, nav_list } = useSelector(store => store.navigation);
	const offers = useSelector(store => store.offers);

	useEffect(() => {
		dispatch(fetch_offers_products(active_tag))
	}, [active_tag]);

	const handleClick = (newTag) => {
		if (active_tag !== newTag) {
			dispatch(toggle_offer(newTag));
		}
	}

	return (
		<section id="novelties">
			<div className={s.offers_section}>
				<div className='container'>
					<div className={s.offers_section_inner}>
						{nav_list.map(elem =>
							<h2
								className={`${s.title} ${s[elem.tag === active_tag ? 'active' : ''] || ''}`}
								key={elem.id}
								onClick={() => handleClick(elem.tag)}>
								{elem.title}
							</h2>)}
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
		</section>
	)
}
