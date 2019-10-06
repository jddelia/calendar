import React, { useState } from 'react';
import DateBox from './DateBox';

import { DATE_BOXES, DAYS_ABBR, MONTHS_ABBR } from '../calendarUtils';

const date = new Date();
const currentDay = date.getDay();
let firstDayOfMonth;

// If the date is 7 or greater
if (date.getDate() > 6) {
  // Subtract index of current day by
  // remainder of (date/days in week) + 1 (Adds current day in count)
  // to get index of first day in month
  firstDayOfMonth = Math.abs((currentDay) - (date.getDate() % DAYS_ABBR.length) + 1);
} else {
  firstDayOfMonth = (currentDay) - (date.getDate()) + 1;
  console.log(firstDayOfMonth)

  // If first day is negative index
  if (firstDayOfMonth < 0) {
    console.log(firstDayOfMonth)
    // Subtract firstDayOfMonth index,
    // by number of days in week
    firstDayOfMonth = DAYS_ABBR.length + firstDayOfMonth;
  }
}

function CalendarBody({ daysInMonth }) {
  const [isDisplayed, setIsDisplayed] = useState(false);

  let calendarDateBoxes = [];
  
  /*if (firstDayOfMonth > 3 && MONTHS_ABBR[date.getMonth()]) {
    console.log(DAYS_ABBR[firstDayOfMonth])
  }*/

  // Days up until days in month (e.g 1-31)
  let day = 1;
  for (let i = 0; i < DATE_BOXES; i++) {
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