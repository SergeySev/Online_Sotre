import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import './calendar.css';
import { useState } from 'react';

export function CalendarCustom({ setCalendarValue }) {
	const [value, onChange] = useState(new Date());
	return (
		<p
			onClick={(e) => e.stopPropagation()}>
			<Calendar
				minDate={value}
				// value={value}
				onChange={(value) => setCalendarValue(value)}
			/>
		</p>
	)
}
