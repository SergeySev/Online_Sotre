import { ComparisonCharacteristicItem } from '../'
import s from './ComparisonCharacteristicList.module.css'

export function ComparisonCharacteristicList({ characters }) {
//console.log("🚀 ~ file: ComparisonCharacteristicList.jsx:5 ~ ComparisonCharacteristicList ~ characters:", characters)

	return (
		<li className={s.product_characters}>
			<ul className={s.characters_list}>
				{characters.map((character, index) =>
					<ComparisonCharacteristicItem key={index} character={character} />
				)}
			</ul>
		</li>
	)
}
