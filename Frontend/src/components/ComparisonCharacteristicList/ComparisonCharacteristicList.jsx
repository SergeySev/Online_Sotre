import { ComparisonCharacteristicItem } from '../ComparisonCharacteristicItem/ComparisonCharacteristicItem'
import s from './ComparisonCharacteristicList.module.css'

export function ComparisonCharacteristicList({characters}) {
	//console.log("🚀 ~ file: ComparisonCharacteristicList.jsx:5 ~ ComparisonCharacteristicList ~ characters:", characters)

	const characters_values = Object.values(characters)
	//console.log("🚀 ~ file: ComparisonCharacteristicList.jsx:8 ~ ComparisonCharacteristicList ~ characters_values:", characters_values)
	
	return (
		<li className={s.product_characters}>
		<ul className={s.characters_list}
			//style={{
			//	borderRight: "1px solid var(--black)",
			//}}
			>
			{
				//characters_values.map((character, index) =>
				characters.map((character, index) =>
		<ComparisonCharacteristicItem key={index} character={character}/>
					)}
		</ul>
	</li>
	)
}
