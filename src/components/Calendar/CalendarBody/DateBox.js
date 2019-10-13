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

  /*function handleDeleteEvent(index) {
    const filteredEventsList = events.filter((_, idx) => {
      return idx !== index;
    });

    setEvents(filteredEventsList);
  }*/

  const eventsList = events.map((event, index) => {
    return (
      <div key={index} className="eventDescShort">
        <span className="eventTime">{event.time} </span>
        <span className="eventTitle">{event.title}</span>
      </div>
    );
  });

  if (boxDate === null) {
    return (
      <div className="blankBox"></div>
    );
  }

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