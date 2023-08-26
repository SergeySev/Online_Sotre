import { ComparisonCharacteristicItem } from '../'
import s from './ComparisonCharacteristicList.module.css'

export function ComparisonCharacteristicList({ characters }) {

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
