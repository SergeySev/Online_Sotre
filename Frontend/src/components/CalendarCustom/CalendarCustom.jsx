import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import './calendar.css';

export function CalendarCustom({ setCalendarValue }) {
	return (
		<p
			onClick={(e) => e.stopPropagation()}>
			<Calendar
				onChange={(value) => setCalendarValue(value)}
			/>
		</p>
	)
}
