import React from 'react';
import NavMenu from './NavMenu';
import StaffCard from './StaffCard';
import Slideshow from './Slideshow';
import '../Styles/General.css';
import 'bootstrap/dist/css/bootstrap.css';
import '../Styles/About.css';
import '../Styles/InvertedButton.css'

function About() {
  const gallery_imgs = [

    require('../Images/About/gallery1.jpg'),
    require('../Images/About/gallery2.jpg'),
    require('../Images/About/gallery3.jpg'),
    require('../Images/About/gallery4.jpg')
  ]

  const Sofia = require('../Images/About/Staff/Sofia.jpg')
  const Lauren = require('../Images/About/Staff/Lauren.jpg')
  const Lucas = require('../Images/About/Staff/Lucas.jpg')
  const Noah = require('../Images/About/Staff/Noah.jpg')
  const Fatemeh = require('../Images/About/Staff/Fatemeh.jpg')
  const Leon = require('../Images/About/Staff/Leon.jpg')

  
  return (
    <div>
      <div className='inverse'>
        <div className='page-content'>
          <NavMenu className='inverted-button'/>
          <h1 className='title'>ABOUT</h1>
          <hr />
          <br />

          <h3>HISTORY & MISSION</h3>
          <Slideshow images={gallery_imgs} />

          <br /><br />

          <p>Established in 2010, the Museum of Photography stands as a testament to the power of visual storytelling. With a diverse collection of images captured by photographers from around the world, the museum serves as a vibrant hub that celebrates the artistry and impact of photography. Through exhibitions and events, the Museum of Photography invites visitors to explore the artistic, cultural, and politial roles of photography.</p>
          <br></br><br></br>
        </div>
      </div>
      <div className='standard' style={{ margin: 0 }}>
        <div className='page-content'>
          <br></br>
          <h3>STAFF</h3>
          <br></br>
          <div className='staff-cards-container'>
            <StaffCard
              name="Sofia García"
              position="Executive Director"
              pronouns= "She/Her"
              email="sofiagarcia@mop.com"
              profilePicture= {Sofia}
            />

            <StaffCard
              name="Lauren Gu"
              pronouns='She/Her'
              position="Chief Curator"
              email="laurengu@mop.com"
              profilePicture= {Lauren}
            />
        </div>
        <div className='staff-cards-container'>
            <StaffCard
              name="Lucas Silva"
              pronouns='They/Them'
              position="Director of Operations"
              email="lucassilva@mop.com"
              profilePicture= {Lucas}
            />

            <StaffCard
              name="Noah Williams"
              position="Marketing Manager"
              pronouns='He/Him'
              email="noahwilliams@mop.com"
              profilePicture= {Noah}
            />
        </div>
        <div className='staff-cards-container'>
            <StaffCard
              name="Fatemeh Salehi"
              pronouns= 'She/Her'
              position="Collections Manager and Registrar"
              email="fatemehsalehi@mop.com"
              profilePicture= {Fatemeh}
            />

            <StaffCard
              name="Leon Müller"
              position="Director of Community Engagement"
              pronouns='They/Them'
              email="leonmuller@mop.com"
              profilePicture= {Leon}
            />
        </div>
        
        </div>
      </div>
    </div>
  );
}

export default About;
