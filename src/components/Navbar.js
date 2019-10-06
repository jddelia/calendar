import React from 'react';

function Navbar() {
  return (
    <nav className="navBar">
      <div className="navLeft">
        <span className="navTitle">ProCalendar</span>
      </div>

      <div className="navRight">
        <div className="navLinks">
          <a href="#" className="navLink">Github</a>
          <a href="#" className="navLink">Home</a>
          <a href="#" className="navLink">About</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;