import React, { useRef } from 'react';

function DateBoxModal({ events, date, setEvents, setModalDisplayed, setIsDisplayed }) {
  const timeRef = useRef();
  const eventRef = useRef();

  function handleCloseModal() {
    console.log('clicked!')
    setModalDisplayed(prevState => !prevState);
    setIsDisplayed(false);
  }

  function handleAddEvent() {
    const eventTime = timeRef.current.value;
    const eventDesc = eventRef.current.value;

    setEvents(prevState => [
      ...prevState,
      {
        time: eventTime,
        title: eventDesc
      }
    ]);
  }

  return (
    <div className="dateBoxModal">
      <div className="modalControls">
        <span className="modalTitle">Day: {date}</span>
        <span className="modalCloseBtn" onClick={handleCloseModal}>X</span>
      </div>

      <div className="addEvent">
        <form className="modalForm">
          <div className="timeInput">
            <label className="modalFormLabel">Time:</label>
            <select ref={timeRef} className="timeSelect">
              <option className="time">12:00 AM</option>
            </select>
          </div>

          <div className="eventInput">
            <label className="modalFormLabel">Event:</label>
            <textarea ref={eventRef} className="event" rows="4" cols="4"></textarea>
          </div>

          <button type="submit" className="submitBtn">Add</button>
        </form>
      </div>

      <div className="events">
        {events}
      </div>
    </div>
  );
}

export default DateBoxModal;