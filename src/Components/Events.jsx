import React from 'react';
import NavMenu from './NavMenu';
import 'bootstrap/dist/css/bootstrap.css';
import '../Styles/General.css';
import '../Styles/Events.css';
import SlideShow from './Slideshow';

function Events() {
  const samuel = [
    require('../Images/Events/Samuel/img1.jpg'),
    require('../Images/Events/Samuel/img2.jpg'),
    require('../Images/Events/Samuel/img3.jpg'),
    require('../Images/Events/Samuel/img4.jpg')
  ];

  const julien = [
    require('../Images/Events/Julien/img1.jpg'),
    require('../Images/Events/Julien/img2.jpg'),
    require('../Images/Events/Julien/img3.jpg'),
    require('../Images/Events/Julien/img4.jpg')
  ];

  return (
    <div className='page-setup'>
      <div className='page-content'>
        <h1 className='title'>EVENTS</h1>
        <hr />
        <br />
        <h2>Events do not require registration unless otherwise specified and do not require an additional fee.</h2>
        <br />
        <br />
        <div className='row'>
          <div className='col-2'>
            <img className='photographer-icon' src={require('../Images/Events/Samuel/profilepic.jpg')} alt='Image' />
          </div>
          <div className='col-10'>
            <h2>PRESENTATION FROM SAMUEL BOLDUC</h2>
            <br />
            <p>
              Join photographer Samuel Bolduc for a presentation about his research and exploration techniques to push artistic boundaries.
              Drawing inspiration from surrealism, Bolduc is an expert at creating a new world through photography.
            </p>
          </div>
        </div>

        <br />
        <div className='row'>
          <div className='col-4'>
            <h5>Audience:</h5>
            <p>This presentation is designed for photographers of all levels</p>
          </div>

          <div className='col-4'>
            <h5>Equipment:</h5>
            <p>No equipment is required for this presentation</p>
          </div>
          <div className='col-4'>
            <h5>Date:</h5>
            <p>08/08/2023<br />12:30pm-2:00pm</p>
          </div>
        </div>
        <SlideShow images={samuel} />

        <div className='row add-margintop-contact'>
          <div className='col-2'>
            <img className='photographer-icon' src={require('../Images/Events/Julien/photogrpher-icon.jpg')} alt='Image' />
          </div>
          <div className='col-10'>
            <h2>ZOOM PRESENTATION WITH JULIEN CHATELIN</h2>
            <br />
            <p>
              Join Julien Chatelin for a presentation about his collection "China West" which captures the economic development that has led
              to a radically redefined topography in China. This presentation will be hosted virtually over Zoom at this link: <a href="https://zoom.us/">https://zoom.us/</a>.
              This event does not require the purchase of an admission ticket to the museum.
            </p>
          </div>
        </div>

        <br />
        <div className='row'>
          <div className='col-4'>
            <h5>Audience:</h5>
            <p>Anyone</p>
          </div>

          <div className='col-4'>
            <h5>Equipment:</h5>
            <p>Internet connected device.</p>
          </div>
          <div className='col-4'>
            <h5>Date:</h5>
            <p>08/21/2023<br></br>7:00pm-8:30pm</p>
          </div>
        </div>
        <SlideShow images = {julien} />

        <div className='row add-margintop-contact'>
          <div className='col-2'>
            <img className='photographer-icon' src={require('../Images/Events/Undisplayed/eventicon.jpg')} alt='Image' />
          </div>
          <div className='col-10'>
            <h2>TOUR OF UNDISPLAYED WORKS</h2>
            <br />
            <p>
              Join us for a tour of the 4th floor where undisplayed works are stored. One of our knowledgeable guides will go over the undisplayed
              pieces in our collection as well as the process of curating, maintaining, and displaying photographs.
            </p>
          </div>
        </div>

        <br />
        <div className='row'>
          <div className='col-4'>
            <h5>Audience:</h5>
            <p>Anyone</p>
          </div>

          <div className='col-4'>
            <h5>Equipment:</h5>
            <p>None</p>
          </div>
          <div className='col-4'>
            <h5>Date:</h5>
            <p>Every Saturday<br />5:00pm-6:30pm</p>
          </div>
        </div>

        <div className='img-container-home'>
          <img className='home-img' src={require('../Images/Events/Undisplayed/img1.jpg')} alt='Image' />
          <div className='home-img-border' />
        </div>
        <br />
        <br />
        <br />
      </div>
      <NavMenu />
    </div>
  );
}

export default Events;
