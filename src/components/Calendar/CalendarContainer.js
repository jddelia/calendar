import React, { useState } from 'react';

import Calendar from './Calendar';

import { MONTHS } from './calendarUtils';

let date = new Date();

function CalendarContainer() {
  const [month, setMonth] = useState(MONTHS[date.getMonth()]);

  return (
    <div className="calendarContainer">
      <Calendar month={month} />
    </div>
  );
};

export default CalendarContainer;