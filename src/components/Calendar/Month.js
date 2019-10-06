import React from 'react';

function Month({ monthName }) {
  return (
    <div className="month">
      <span className="monthText">{monthName || "January"}</span>
    </div>
  );
}

export default Month;