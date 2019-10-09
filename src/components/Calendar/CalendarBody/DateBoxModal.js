import React, { useRef } from 'react';

function DateBoxModal({ events, date, setEvents, setModalDisplayed, setIsDisplayed }) {
  const timeRef = useRef();
  const eventRef = useRef();

  function handleCloseModal() {
    console.log('clicked!')
    setModalDisplayed(prevState => !prevState);
    setIsDisplayed(false);
  }

  function handleAddEvent(e) {
    e.preventDefault();

    const eventTime = timeRef.current.value;
    const eventDesc = eventRef.current.value;

    console.log(eventTime, eventDesc)

    setEvents([
      ...events,
      {
        time: eventTime,
        title: eventDesc
      }
    ]);

    eventRef.current.value = "";
  }

  function handleDeleteEvent(index) {
    const filteredEventsList = events.filter((_, idx) => {
      return idx !== index;
    });

    setEvents(filteredEventsList);
  }

  const eventsList = events.map((event, index) => {
    return (
      <div key={index} className="eventDesc">
        <span className="eventTimeMain">{event.time} </span>
        <span className="eventTitleMain">{event.title}</span>
        <span className="removeEvent" onClick={() => handleDeleteEvent(index)}>x</span>
      </div>
    );
  });

  //const timeSlots = Array(24).fill(0)

  return (
    <div className="dateBoxModal">
      <div className="modalControls">
        <span className="modalTitle">Day: {date}</span>
        <span className="modalCloseBtn" onClick={handleCloseModal}>X</span>
      </div>

      <div className="addEvent">
        <form className="modalForm" onSubmit={handleAddEvent}>
          <div className="timeInput">
            <label className="modalFormLabel">Time:</label>
            <select ref={timeRef} className="timeSelect">
              <option className="time">12:00 AM</option>
              <option className="time">1:00 AM</option>
              <option className="time">2:00 AM</option>
              <option className="time">3:00 AM</option>
              <option className="time">4:00 AM</option>
              <option className="time">5:00 AM</option>
              <option className="time">6:00 AM</option>
              <option className="time">7:00 AM</option>
              <option className="time">8:00 AM</option>
              <option className="time">9:00 AM</option>
              <option className="time">10:00 AM</option>
              <option className="time">11:00 AM</option>
              <option className="time">12:00 PM</option>
              <option className="time">1:00 PM</option>
              <option className="time">2:00 PM</option>
              <option className="time">3:00 PM</option>
              <option className="time">4:00 PM</option>
              <option className="time">5:00 PM</option>
              <option className="time">6:00 PM</option>
              <option className="time">7:00 PM</option>
              <option className="time">8:00 PM</option>
              <option className="time">9:00 PM</option>
              <option className="time">10:00 PM</option>
              <option className="time">11:00 PM</option>
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
        {eventsList}
      </div>
    </div>
  );
}

export default DateBoxModal;