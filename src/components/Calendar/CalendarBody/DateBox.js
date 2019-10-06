import React, { useState } from 'react';

import DateBoxModal from './DateBoxModal';

function DateBox({ boxDate, setIsDisplayed, isDisplayed }) {
  const [events, setEvents] = useState([]);
  const [modalDisplayed, setModalDisplayed] = useState(false);

  function handleModalDisplayed() {
    if (isDisplayed) return;

    setModalDisplayed(true);
    setIsDisplayed(true);
  }

  console.log(modalDisplayed)

  const eventsList = events.map(event => {
    return (
      <span className="eventDescShort">
        {event.title.subStr(0, 20)}
      </span>
    );
  }); 

  return (
    <div className="dateBox">
      <span className="boxDate">{boxDate}</span>

      <div className="eventsList" onClick={handleModalDisplayed}>
        {eventsList}
      </div>

      {
        modalDisplayed && 
        <DateBoxModal
          date={boxDate} 
          events={events}
          setEvents={setEvents}
          setModalDisplayed={setModalDisplayed}
          setIsDisplayed={setIsDisplayed}
        />
      }
    </div>
  );
}

export default DateBox;