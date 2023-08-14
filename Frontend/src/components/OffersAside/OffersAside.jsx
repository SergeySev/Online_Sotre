import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetch_aside_offers } from '../../requests/requests';
import s from './OffersAside.module.css'

export function OffersAside() {

	const offers_list = useSelector(store => store.aside_offers)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetch_aside_offers())
	}, [])

	return (
		<ul className={s.offers_list}>
			{offers_list.map((elem, index) =>
				<li key={index} className={s.offers_item}>
					<div className={s.img_wrapper}>
						<img src={elem.imageLink} alt={elem.title} />
					</div>
					<div className={s.content_wrapper}>
						<h4>{elem.title}</h4>
						<p>{elem.description}</p>
					</div>
				</li>
			)}
		</ul>
	)
}
