import Logo from '../Logo/Logo'
import WorkingHours from '../WorkingHours/WorkingHours';
import TopMenu from '../TopMenu/TopMenu';
import TotalSum from '../TotalSum/TotalSum';
import s from './TopHeader.module.css'

export default function TopHeader() {
	return (
		<div className={s.top_header}>
			<Logo />
			<WorkingHours />
			<TopMenu />
			<TotalSum />
			{/* <div className={s.burger_menu}></div> */}
		</div >
	)
}
