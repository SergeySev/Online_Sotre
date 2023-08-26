import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import s from './BurgerAside.module.css'

export function BurgerAside({ isAssideOpen, setIsAssideOpen, content }) {

	return (
		<div
			className={`
			${s.menu_burger} 
			${s[isAssideOpen ? "open" : ''] || ''} 
			${s[content ? content : ''] || ''}
			`}
			onClick={() => setIsAssideOpen(!isAssideOpen)}>
			{!isAssideOpen ? <HiOutlineMenuAlt2 /> : <AiOutlineClose />}
		</div>
	)
}
