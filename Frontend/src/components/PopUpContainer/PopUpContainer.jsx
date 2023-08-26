import { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { PopUp } from '../';

export function PopUpContainer({ popup_active, setPopupActive, content }) {

	const nodeRef = useRef(null);

	return (

		<CSSTransition
			in={popup_active}
			nodeRef={nodeRef}
			timeout={400}
			classNames="my-node"
			unmountOnExit>

			<PopUp
				ref={nodeRef}
				onClick={() => setPopupActive(false)}
				content={content}
			/>
		</CSSTransition >
	)
}
