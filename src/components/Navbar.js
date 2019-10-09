import React from 'react';

function Navbar() {
  return (
    <nav className="navBar">
      <div className="navLeft">
        <span className="navTitle">ProCalendar</span>
      </div>

      <div className="navRight">
        <div className="navLinks">
          <a href="https://github.com/jddelia" className="navLink">Github</a>
          <a href="#" className="navLink">Home</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;