import s from './ComparisonCharacteristicItem.module.css'

export function ComparisonCharacteristicItem({ character }) {

	return (
		<li
		style={{
			width: "218px",
			textAlign: "center"
		}}
	>
		<p
			style={{
				padding: "15px 18px",
				borderBottom: "1px solid var(--black)"
			}}
		>{character? character: `-`}</p>
	</li>
	)
}
