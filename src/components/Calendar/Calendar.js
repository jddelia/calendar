import React, { useState } from 'react';

import CalendarControls from './CalendarControls/CalendarControls';
import Month from './Month';
import Days from './Days';
import CalendarBody from './CalendarBody/CalendarBody';

import FirstDayContext from '../../Contexts/FirstDayContext';

import { DAYS_IN_MONTHS, MONTHS } from './calendarUtils';

const date = new Date();

function Calendar({  }) {
  const [firstDay, setFirstDay] = useState(null);
  const [monthIndex, setMonthIndex] = useState(date.getMonth())

  const month = MONTHS[monthIndex];

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
    <FirstDayContext.Provider value={firstDay, setFirstDay}>
      <div className="calendar">
        <CalendarControls monthIndex={monthIndex} setMonthIndex={setMonthIndex} />
        <Month monthName={month} />
        <Days />
        <CalendarBody daysInMonth={daysInMonth} />
      </div>
    </FirstDayContext.Provider>
  );
}

export default Calendar;