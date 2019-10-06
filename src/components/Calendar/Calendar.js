import React from 'react';

import CalendarControls from './CalendarControls/CalendarControls';
import Month from './Month';
import Days from './Days';
import CalendarBody from './CalendarBody/CalendarBody';

import { DAYS_IN_MONTHS } from './calendarUtils';

function Calendar({ month }) {
  let daysInMonth;

  if (DAYS_IN_MONTHS[31].includes(month)) {
    daysInMonth = 31;
  } else if (month === "February") {
    daysInMonth = 28;
  } else {
    daysInMonth = 30;
  }

  console.log(DAYS_IN_MONTHS[31].includes(month))

  return (
    <div className="calendar">
      <CalendarControls />
      <Month monthName={month} />
      <Days />
      <CalendarBody daysInMonth={daysInMonth} />
    </div>
  );
}

export default Calendar;