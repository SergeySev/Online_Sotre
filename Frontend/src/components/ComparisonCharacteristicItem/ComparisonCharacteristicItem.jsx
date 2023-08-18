import s from './ComparisonCharacteristicItem.module.css'

export function ComparisonCharacteristicItem({ character }) {

	return (
		<li className={s.comparison_item}>
			<p className={s.comparison_value}>
				{character ? character : `-`}
			</p>
		</li>
	)
}
