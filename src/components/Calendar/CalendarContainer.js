import React, { useState } from 'react';

import Calendar from './Calendar';

import { MONTHS } from './calendarUtils';

function CalendarContainer() {
  return (
    <div className="calendarContainer">
      <Calendar />
    </div>
  );
}

export default CalendarContainer;