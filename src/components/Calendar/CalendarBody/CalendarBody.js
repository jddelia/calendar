import React, { useState, useEffect } from 'react';
import DateBox from './DateBox';

import { DATE_BOXES, DAYS_ABBR, DAYS_IN_MONTHS } from '../calendarUtils';

const date = new Date();
const currentDay = date.getDay();
let firstDayOfMonth;

// If the date is 7 or greater
if (date.getDate() > 6) {
  // Subtract index of current day by
  // remainder of (date/days in week) + 1 (Adds current day in count)
  // to get index of first day in month
  firstDayOfMonth = (currentDay) - (date.getDate() % DAYS_ABBR.length) + 1;
} else {
  firstDayOfMonth = (currentDay) - (date.getDate()) + 1;
}

// If first day is negative index
if (firstDayOfMonth < 0) {
  // Subtract firstDayOfMonth index,
  // by number of days in week
  firstDayOfMonth = DAYS_ABBR.length + firstDayOfMonth;
}

function CalendarBody({ daysInMonth, firstDay, setFirstDay, month }) {
  const [isDisplayed, setIsDisplayed] = useState(false);

  useEffect(() => {
    setFirstDay(firstDayOfMonth);
  }, [setFirstDay]);

  let calendarDateBoxes = [];
  // If firstday of month starts on Friday
  // or Saturday, add extra date boxes
  let modifier = 0;
  
  // Starts on Friday (5), with 31 days or
  // Saturday (6), with 30 days
  if (firstDay === 5) {
    if (DAYS_IN_MONTHS[31].includes(month)) {
      modifier = 7;
    }
  } else if (firstDay === 6) {
    if (DAYS_IN_MONTHS[30].includes(month)) {
      modifier = 7;
    }
  }

  // Days up until days in month (e.g 1-31)
  let day = 1;
  for (let i = 0; i < (DATE_BOXES + modifier); i++) {
    // Skip "dating" boxes where i is less than the index
    // of the first day of the month [0-6], or if i > days
    // in month + index of first day in month (corrects for start)
    if (i < firstDayOfMonth || i >= daysInMonth + firstDayOfMonth) {
      calendarDateBoxes.push(
        <DateBox key={i} boxDate={null} />
      );
      continue;
    }
    // Start "dating" boxes when i equal first day of month index
    calendarDateBoxes.push(
      <DateBox 
        key={i} 
        boxDate={day} 
        setIsDisplayed={setIsDisplayed}
        isDisplayed={isDisplayed}
      />
    );
    day += 1;
  }

  return (
    <div className="calendarBody">
      {calendarDateBoxes}
    </div>
  );
}

export default CalendarBody;