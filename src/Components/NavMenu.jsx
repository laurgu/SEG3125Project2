import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
          <div className="background-color">
            <ul>
              <li><button className="close-button" onClick={toggleDropdown}>X</button></li>
              <li className="nav-item"><Link to="/">HOME</Link></li>
              <li><hr /></li>
              <li className="nav-item"><Link to="/visit">VISIT</Link></li>
              <li><hr /></li>
              <li className="nav-item"><Link to="/tickets">TICKETS</Link></li>
              <li><hr /></li>
              <li className='subHeading'><Link to="/exhibitions">EXHIBITIONS</Link></li>
              <li><hr /></li>
              <li className='subHeading'><Link to="/collection">COLLECTION</Link></li>
              <li><hr /></li>
              <li className="nav-item"><Link to="/about">ABOUT</Link></li>
              <li><hr /></li>
              <li className="nav-item"><Link to="/contact">CONTACT</Link></li>
              <li><hr /></li>
              <li><Link className="red" to="/donate">DONATE</Link></li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default NavMenu;
