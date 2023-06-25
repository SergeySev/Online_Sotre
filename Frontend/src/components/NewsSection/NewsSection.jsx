import React from 'react';
import s from './NewsSection.module.css';
import Button from '../../UI/Button/Button'
import { news_list } from '../../data/data'

export function NewsSection() {
	return (
		<section className={s.news_section}>
			<div className='container'>
				<div className={s.news_section_inner}>
					<div className={s.text_block}>
						<h2 className={s.title}>News</h2>
						<p className={s.text}>A commercial or industrial enterprise, a commercial and industrial
							association of entrepreneurs, a form of organization of an enterprise in which its legal
							personality differs from the legal personality of the persons participating in it.
							Companies have the status of a legal entity.</p>
						<Button text='Go to news' class_name='orange' />
					</div>
					<div className={s.news_block}>
						{news_list.map(elem => (
							<div className={s.news_item} key={elem.id}>
								<img src={require('./assets/' + elem.image)} />
								<h2 className={s.news_title}>{elem.title}</h2>
								<p className={s.date}>{elem.date}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}
