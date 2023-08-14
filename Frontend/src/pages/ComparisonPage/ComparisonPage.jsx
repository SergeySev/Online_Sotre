import { NewsSection, Breadcrumbs, ComparisonSection } from "../../components";
import s from './ComparisonPage.module.css'

export function ComparisonPage() {
	const breadcrumbsItems = [
		{ text: 'Home /', link: '/Online_Store' },
		{ text: 'Comparison Page', link: '/comparison' },
	];

	return (
		<section className={s.comparison_page} >
			<div className="container">
				<Breadcrumbs items={breadcrumbsItems} />
				<ComparisonSection />
			</div>
			<NewsSection content="comparison" />
		</section>
	)
}
