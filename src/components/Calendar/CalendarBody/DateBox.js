import React from 'react';

function DateBox({ boxDate }) {
  return (
    <div className="dateBox">
      <span className="boxDate">{boxDate}</span>
    </div>
  );
};

export default DateBox;