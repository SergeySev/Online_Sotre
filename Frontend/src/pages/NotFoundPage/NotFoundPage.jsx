import { NavLink } from 'react-router-dom'
import s from './NotFoundPage.module.css'
import { Button } from '../../UI'

export function NotFoundPage() {

	return (
		<section className={s.notfound_page}>
			<div className={s.notfound_content}>
				<h2 className={s.notfound_title}>Sorry, page not found</h2>
				<p className={s.notfound_subtitle}>But we will definitely fix everything, but for now, try:</p>
				<NavLink to="/Online_Store">
					<Button text="TO THE MAIN" content="news" />
				</NavLink>
				<p className={s.notfound_404}>404</p>
			</div>
		</section>
	)
}
