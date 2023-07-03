import React from 'react';
import "../Styles/General.css"
import "../Styles/VisitNav.css"

function VisitNav() {
  return (
    <div className="visit-nav">
        <h3 className='jump-to'>JUMP TO</h3>
        <ul>
            <li><a>Admission</a></li>
            <li>Tour Schedule</li>
            <li>Museum Map</li>
            <li>Contact Information</li>
            <li>Hours and Location</li>
            <li>FAQ</li>
        </ul>
    </div>
  );
}

export default VisitNav;
