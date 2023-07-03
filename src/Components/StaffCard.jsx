import React from 'react';
import '../Styles/StaffCard.css';
import 'bootstrap/dist/css/bootstrap.css';


const StaffCard = ({ name, position, email, profilePicture }) => {
  return (
<div className="card staff">
  <div className="profile-pic">
    <img src={require('../Images/placeholder.jpg')} alt='Sample Image' />
  </div>
  <div className="card-content">
    <h3>{name}</h3>
    <p>{position}</p>
    <p>{email}</p>
  </div>
</div>

  
  );
};

export default StaffCard;
