import React from 'react';

const chevronRight = require('../../../assets/chevronRight.png');

function CalendarControls({ monthIndex, setMonthIndex }) {
  function handleLeftChevronClick() {
    if (monthIndex === 0) return;

    setMonthIndex(prevState => prevState - 1);
  }

  function handleRightChevronClick() {
    if (monthIndex === 11) return;

    setMonthIndex(prevState => prevState + 1);
  }

  return (
    <div className="calendarControls">
      <img 
        className="chevron" 
        src={chevronRight} 
        onClick={handleLeftChevronClick} 
      />

      <img 
        className="chevron" 
        src={chevronRight} 
        style={{ transform: 'rotate(180deg)'}}
        onClick={handleRightChevronClick} />
    </div>
  );
};

export default CalendarControls;