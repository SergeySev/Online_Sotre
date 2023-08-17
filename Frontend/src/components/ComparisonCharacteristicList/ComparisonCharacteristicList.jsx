import { ComparisonCharacteristicItem } from '../ComparisonCharacteristicItem/ComparisonCharacteristicItem'
import s from './ComparisonCharacteristicList.module.css'

export function ComparisonCharacteristicList({characters}) {
	
	return (
		<li className={s.table_item}>
		<ul
			style={{
				borderRight: "1px solid var(--black)",
			}}>
			{
				characters.map((character, index) =>
		<ComparisonCharacteristicItem key={index} character={character}/>
					)}
		</ul>
	</li>
	)
}
