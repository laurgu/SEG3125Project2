import React from 'react';
import NavMenu from './NavMenu';
import StaffCard from './StaffCard';
import '../Styles/General.css';
import 'bootstrap/dist/css/bootstrap.css';
import '../Styles/About.css';
import '../Styles/InvertedButton.css'

function About() {
  return (
    <div>
      <div className='inverse'>
        <div className='page-content'>
          <NavMenu className='inverted-button'/>
          <h1>ABOUT</h1>
          <hr />
          <br />

          <h3>HISTORY</h3>
          <img className='about-image' src={require('../Images/placeholder.jpg')} alt='Sample Image' />

          <br /><br />

          <p>A brief history</p>
        </div>
      </div>
      <div className='standard' style={{ margin: 0 }}>
        <div className='page-content'>
          <div className='staff-cards-container'>
            <StaffCard
              name="Name"
              position="Position"
              email="email@mop.com"
              profilePicture={require('../Images/placeholder.jpg').default}
            />

            <StaffCard
              name="Name"
              position="Position"
              email="email@mop.com"
              profilePicture={require('../Images/placeholder.jpg').default}
            />
          </div>

          <StaffCard
            name="Name"
            position="Position"
            email="email@mop.com"
            profilePicture={require('../Images/placeholder.jpg').default}
          />
        </div>
      </div>
    </div>
  );
}

export default About;
