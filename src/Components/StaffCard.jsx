import React from 'react';
import '../Styles/StaffCard.css';
import 'bootstrap/dist/css/bootstrap.css';


const StaffCard = ({ name, position, email, profilePicture, pronouns }) => {
  return (
<div className="card staff">
  <div className="profile-pic">
    <img src={profilePicture} alt = "Staff Image"/>
  </div>
  <div className="card-content">
    <h3>{name}</h3>
    <p style={{ fontSize: '1.2vw'}}>{pronouns}</p>
    <p>{position}</p>
    <p>{email}</p>
  </div>
</div>

  
  );
};

export default StaffCard;
