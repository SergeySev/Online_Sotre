import { useEffect, useState } from 'react'

export default function usePortraite() {

	const [isPortrait, setIsPortrait] = useState(window.innerWidth < 480);

	useEffect(() => {
		const handleResize = () => {
			setIsPortrait(window.innerWidth < 480);
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);
	return { isPortrait }
}
