import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import s from './BurgerAside.module.css'

export function BurgerAside({ isAsideOpen, setIsAsideOpen, content }) {

	return (
		<div
			className={`
			${s.menu_burger} 
			${s[isAsideOpen ? "open" : ''] || ''} 
			${s[content ? content : ''] || ''}
			`}
			onClick={() => setIsAsideOpen(!isAsideOpen)}>
			{!isAsideOpen ? <HiOutlineMenuAlt2 /> : <AiOutlineClose />}
		</div>
	)
}
