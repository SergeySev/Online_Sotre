import React from 'react'
import s from './Banner.module.css'
import tools from './assets/banner1.png'
import promo from './assets/banner2.png'
import novelties from './assets/banner3.png'
import drills from './assets/banner4.png'
import BannerItem from '../BannerItem/BannerItem'

export function Banner() {
	return (
		<section id="banner" className={s.banner}>
			<div className='container'>
				<div className={s.banner_inner}>
					<div className={s.banner_left}>
						<BannerItem
							image={tools}
							text='DeWALT - Tool with real character'
							isTitleBig={true}
							isImageBig={true} />
					</div>
					<div className={s.banner_right}>
						<BannerItem
							image={promo}
							text='Promotions'
							isTitleBig={false}
							isImageBig={true} />
						<div className={s.small_images}>
							<BannerItem
								image={novelties}
								text='New arrival' />
							<BannerItem
								image={drills}
								ext='Promotions for drills' />
						</div>
					</div>
				</div>

			</div>
		</section>
	)
}
