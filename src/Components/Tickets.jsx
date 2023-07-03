import React, { useState } from 'react';
import NavMenu from './NavMenu';
import CalendarInput from './CalendarInput';
import 'bootstrap/dist/css/bootstrap.css';
import '../Styles/General.css';
import'../Styles/Tickets.css';

function Tickets() {
  const [childTicketCount, setChildTicketCount] = useState(0);
  const [studentTicketCount, setStudentTicketCount] = useState(0);
  const [adultTicketCount, setAdultTicketCount] = useState(0);
  const [seniorTicketCount, setSeniorTicketCount] = useState(0);

  const handleChildTicketCountChange = (event) => {
    const count = parseInt(event.target.value);
    setChildTicketCount(count);
  };

  const handleStudentTicketCountChange = (event) => {
    const count = parseInt(event.target.value);
    setStudentTicketCount(count);
  };

  const handleAdultTicketCountChange = (event) => {
    const count = parseInt(event.target.value);
    setAdultTicketCount(count);
  };

  const handleSeniorTicketCountChange = (event) => {
    const count = parseInt(event.target.value);
    setSeniorTicketCount(count);
  };

  const handleDecrement = (setter) => {
    setter((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
  };

  const handleIncrement = (setter) => {
    setter((prevCount) => prevCount + 1);
  };

  return (
    <div className='page-setup'>
      <div className='page-content'>
        <h1 className='title'>TICKETS</h1>
        <hr />
        <br></br>
        <h3>TICKETS</h3>
        <br></br>
        <h4 className='red'>A ticket gives you access to all exhibitions.</h4>
        <br />
        <br />

        <div className='row'>
          <div className='col-6'>
            <h4>Child</h4>
            <p>Age 11 and under</p>
          </div>
          <div className='col-2'>
            <h4>Free</h4>
          </div>
          <div className='col-4'>
            <div className='counter'>
              <button onClick={() => handleDecrement(setChildTicketCount)}>-</button>
              <input
                type='number'
                className='ticket-input'
                value={childTicketCount}
                onChange={handleChildTicketCountChange}
              />
              <button onClick={() => handleIncrement(setChildTicketCount)}>+</button>
            </div>
          </div>
        </div>
    <br></br>
        <div className='row'>
          <div className='col-6'>
            <h4>Student</h4>
            <p>Age 18 and under</p>
          </div>
          <div className='col-2'>
            <h4>$5.00</h4>
          </div>
          <div className='col-4'>
            <div className='counter'>
              <button onClick={() => handleDecrement(setStudentTicketCount)}>-</button>
              <input
                type='number'
                className='ticket-input'
                value={studentTicketCount}
                onChange={handleStudentTicketCountChange}
              />
              <button onClick={() => handleIncrement(setStudentTicketCount)}>+</button>
            </div>
          </div>
        </div>
        <br></br>

        <div className='row'>
          <div className='col-6'>
            <h4>Adult</h4>
            <br />
          </div>
          <div className='col-2'>
            <h4>$9.00</h4>
          </div>
          <div className='col-4'>
            <div className='counter'>
              <button onClick={() => handleDecrement(setAdultTicketCount)}>-</button>
              <input
                type='number'
                className='ticket-input'
                value={adultTicketCount}
                onChange={handleAdultTicketCountChange}
              />
              <button onClick={() => handleIncrement(setAdultTicketCount)}>+</button>
            </div>
          </div>
        </div>
        <br></br>

        <div className='row'>
          <div className='col-6'>
            <h4>Senior</h4>
            <p>Age 60+</p>
          </div>
          <div className='col-2'>
            <h4>$6.00</h4>
          </div>
          <div className='col-4'>
            <div className='counter'>
              <button onClick={() => handleDecrement(setSeniorTicketCount)}>-</button>
              <input
                type='number'
                className='ticket-input'
                value={seniorTicketCount}
                onChange={handleSeniorTicketCountChange}
              />
              <button onClick={() => handleIncrement(setSeniorTicketCount)}>+</button>
            </div>
          </div>
        </div>
        <br></br>
        <h3>DATE</h3>
        <br></br>
        <h4 className='red'>You may visit anytime during operatinghours on your selected date.</h4>
        <br></br>
        <CalendarInput />
        <br></br>
        <br></br>

        <div className='row'>

            <div className='col-6'>
            <h3>CONTACT INFORMATION</h3>
            <div className='row'>
  <h4 className='red'>Your tickets will be sent to the provided email address.</h4>
</div>
<input type='text' className='checkout-input' placeholder='First Name' />
<input type='text' className='checkout-input' placeholder='Last Name' />
<br></br>
<input type='text' className='checkout-input' placeholder='Phone Number' />
<input type='text' className='checkout-input' placeholder='Email' />
<br></br>
<input type='text' className='checkout-input' placeholder='Street Address' />
<input type='text' className='checkout-input' placeholder='Apt' />
<br></br>
<input type='text' className='checkout-input' placeholder='City' />
<input type='text' className='checkout-input' placeholder='Country' /> 
<input type='text' className='checkout-input' placeholder='Postal Code' />
</div>
<div className='col-6'>
<h3>PAYMENT INFORMATION</h3>
<br></br>
<input type='text' className='checkout-input' placeholder='Card Number' />
<input type='text' className='checkout-input' placeholder='CVV' />
<br></br>
<select className='checkout-input'>
  <option value=''>Month</option>
</select>
<input type='text' className='checkout-input' placeholder='Year' />
</div>
</div>
<button className='donate-button'>PURCHASE TICKETS</button>
<NavMenu />
</div>
</div>
  );
}

export default Tickets;
