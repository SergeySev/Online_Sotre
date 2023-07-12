import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import './calendar.css';

export function CalendarCustom({ setCalendarValue }) {
	return (
		<button
			onClick={(e) => e.stopPropagation()}>
			<Calendar
				onChange={(value) => setCalendarValue(value)}
			/>
		</button>
	)
}
