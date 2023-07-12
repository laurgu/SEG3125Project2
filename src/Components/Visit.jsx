import React from 'react';
import NavMenu from './NavMenu';
import VisitNav from './VisitNav';
import FAQDropdown from './FAQDropdown';
import 'bootstrap/dist/css/bootstrap.css';
import '../Styles/General.css';
import '../Styles/Visit.css';



function Visit() {
  return (
    <div className="visit-container page-setup">
    <NavMenu />
    <div className='page-content page-content-visit'>
      <div className="visit-content">
        <h1 className='title'>VISIT</h1>
        <hr></hr>
        <h3>ADMISSION</h3>
            <div className='row'>
                <div className='col-6'>
                    <h4>Child</h4>
                    <p>Age 11 and under</p>
                </div>
                <div className='col-6'><h4>Free</h4></div>
            </div>
            <div className='row'>
                <div className='col-6'>
                    <h4>Student</h4>
                    <p>Age 18 and under</p>
                </div>
                <div className='col-6'><h4>$5.00</h4></div>
            </div>
            <div className='row'>
                <div className='col-6'>
                    <h4>Adult</h4>
                    <div className='extra-spacing'></div>
                </div>
                <div className='col-6'><h4>$9.00</h4></div>
            </div>
            <div className='row'>
                <div className='col-6'>
                    <h4>Senior</h4>
                    <p>Age 60+</p>
                </div>
                <div className='col-6'><h4>$6.00</h4></div>
            </div>
            <button className='tickets-btn' onClick={() => window.location.href = '/tickets'}>PURCHASE TICKETS</button>
            <br></br>
        
        <h3><br></br>TOUR SCHEDULE</h3>
        <p>Tours are free to join and do not require registration. They will cover the seasonal exhibitions.<br></br>
        Tours will meet in the atrium entrance.</p>
        <br></br>
        <div className='row'>
        
            <div className='col-6'>
                <h4>Monday</h4>
                <p>12:00pm - 1:00pm</p>
                <br></br>

                <h4>Tuesday</h4>
                <p>12:00pm - 1:00pm</p>
                <br></br>

                <h4>Wednesday</h4>
                <p>12:00pm - 1:00pm<br></br>
                5:00pm - 6:00pm</p>
                <br></br>

                <h4>Monday</h4>
                <p>12:00pm - 1:00 pm</p>
                <br></br>

                <h4>Thursday</h4>
                <p>12:00pm - 1:00 pm<br></br>
                5:00pm - 6:00pm</p>
                <br></br>
            </div>

            <div className='col-6'>
                <h4>Friday</h4>
                <p>12:00pm - 1:00 pm<br></br>
                5:00pm - 6:00pm</p>
                <br></br>

                <h4>Satuday</h4>
                <p>10:00am - 11:00am<br></br>
                12:00pm - 1:00 pm<br></br>
                5:00pm - 6:00pm</p>
                <br></br>

                <h4>Sunday</h4>
                <p>10:00am - 11:00am<br></br>
                12:00pm - 1:00 pm<br></br>
                2:00pm - 3:00pm</p>
                <br></br>
            </div>
        </div>

        <h3>MUSEUM MAP</h3>
        <div className='row'>
            <div className='col-9'>
                <img className='museum-map-img' src={require('../Images/placeholder.jpg')} alt='Sample Image' />
            </div>
        </div>
    <br></br><br></br>

    <h3>HOURS</h3>
    <div className='row'>
        <div className='col-6'>
        <h4>Monday-Saturday</h4>
        <p>10:00am - 7:00pm</p>
        </div>
        <div className='col-6'>
            <h4>Sunday</h4>
            <p>10:00am - 5:00pm</p>
        </div>
    </div>

    <br></br><br></br>
       
            <h3>LOCATION</h3>

            <iframe
                className='map'
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11201.268967772161!2d-75.69341117575509!3d45.423105939095954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce050a6db98d73%3A0x188a59c3622fdbae!2sUniversity%20of%20Ottawa!5e0!3m2!1sen!2sca!4v1689018239210!5m2!1sen!2sca"
                width="600"
                height="450"
                style={{
                    border: '0',
                    allowfullscreen: '',
                    loading: 'lazy',
                    referrerpolicy: 'no-referrer-when-downgrade'
                }}
                ></iframe>


            <p>123, First Street,<br></br>Ottawa, ON,<br></br>Postal Code</p>
       
            <br></br>       
        <h3>FAQ</h3>
        <FAQDropdown 
            question ="+  Can tickets be purchased in person?"
            answer ="Yes, tickets can be purchased at the ticket booths which are located in the front entrance. We do suggest purchasing tickets online, in advance, as we cannot guarantee ticket availability when tickets are purchased the day of, in person."
        />

        <FAQDropdown 
            question ="+  How long do people usually spend in the museum?"
            answer ="It usually takes about 2-3 hours to see all the exhibitions in the museum."
        />

        <FAQDropdown 
            question ="+  Are there food options in the museum?"
            answer ="There is a cafe in the atrium."
        />

        <FAQDropdown 
            question ="+  Does the museum provide coat check?"
            answer ="Yes, coat check is free and to the left of the ticket booth."
        />
      
        </div>
        <div className="visit-sidebar">
          <VisitNav />
        </div>
        </div>
    
        </div>


  );
}

export default Visit;
