import React, { useState } from 'react';
import '../Styles/NavMenu.css';

function NavMenu() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="nav-menu">
      <button className="menu-button" onClick={toggleDropdown}>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </button>
      {isDropdownOpen && (
        <div className="dropdown-menu" style={{ display: isDropdownOpen ? 'flex' : 'none' }}>
          <div className = 'background-color'>
            <ul>
              <li><button className="close-button" onClick={toggleDropdown}>X</button></li>
              <li className="nav-item"><a href="/">HOME</a></li>
              <li><hr /></li>
              <li className="nav-item"><a href="/visit">VISIT</a></li>
              <li><hr /></li>
              <li className="nav-item"><a href="/tickets">TICKETS</a></li>
              <li><hr /></li>
              <li className='subHeading'><a href="/exhibitions">EXHIBITIONS</a></li>
              <li><hr /></li>
              <li className='subHeading'><a href="/collection">COLLECTION</a></li>
              <li><hr /></li>
              <li className="nav-item"><a href="/about">ABOUT</a></li>
              <li><hr /></li>
              <li className="nav-item"><a href="/contact">CONTACT</a></li>
              <li><hr /></li>
              <li><a className="red" href="/donate">DONATE</a></li>
            </ul>
            </div>
        </div>
      )}
    </div>
  );
}

export default NavMenu;
