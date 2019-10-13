import React, { useState } from 'react';

import CalendarControls from './CalendarControls/CalendarControls';
import Month from './Month';
import Days from './Days';
import CalendarBody from './CalendarBody/CalendarBody';

import FirstDayContext from '../../Contexts/FirstDayContext';

import { DAYS_IN_MONTHS, MONTHS } from './calendarUtils';

const date = new Date();

function Calendar({  }) {
  const [firstDay, setFirstDay] = useState(2);
  const [monthIndex, setMonthIndex] = useState(date.getMonth());
  const month = MONTHS[monthIndex];

  /*useEffect(() => {
    if (DAYS_IN_MONTHS[31].includes(month)) {
      firstDayOfMonth = (firstDay) - (31 % DAYS_ABBR.length) + 1;
      console.log(firstDayOfMonth)
    } else if (month === "February") {
      firstDayOfMonth = (firstDay) - (28 % DAYS_ABBR.length) + 1;
    } else {
      firstDayOfMonth = (firstDay) - (30 % DAYS_ABBR.length) + 1;
      console.log(firstDayOfMonth)
    }
    
    // If first day is negative index
    if (firstDayOfMonth < 0) {
      // Subtract firstDayOfMonth index,
      // by number of days in week
      firstDayOfMonth = DAYS_ABBR.length + firstDayOfMonth;
    }

    setFirstDay(firstDayOfMonth);
  }, [monthIndex])*/

  let daysInMonth;

  if (DAYS_IN_MONTHS[31].includes(month)) {
    daysInMonth = 31;
  } else if (month === "February") {
    daysInMonth = 28;
  } else {
    daysInMonth = 30;
  }

  return (
    <FirstDayContext.Provider value={firstDay, setFirstDay}>
      <div className="calendar">
        <CalendarControls monthIndex={monthIndex} setMonthIndex={setMonthIndex} />
        <Month monthName={month} />
        <Days />
        <CalendarBody
          month={month}
          daysInMonth={daysInMonth} 
          firstDay={firstDay} 
          setFirstDay={setFirstDay} 
        />
      </div>
    </FirstDayContext.Provider>
  );
}

export default Calendar;