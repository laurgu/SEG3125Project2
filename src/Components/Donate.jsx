import React from 'react';
import NavMenu from './NavMenu';
import '../Styles/General.css';
import '../Styles/Donate.css';

function Donate() {
  return (
    <div className='page-setup'>
      <div className='donate-content'>
      <h1 className='title'>DONATE</h1>
              <hr />
              <br></br>
              <h3 className='red left-align'>Thank you for support the Museum of Photography</h3>
              <br></br>
        <div className='row'>
          <div className='col-6'>
          <img className='donate-img ' src={require('../Images/placeholder.jpg')} alt='Sample Image' />

          </div>
          <div className='col-6'>

              <h4>AMOUNT</h4>
              <input type='text' className='donate-input' placeholder='Enter amount' />

              <h4>CONTACT INFORMATION</h4>
              <input type='text' className='donate-input' placeholder='First Name' />
              <input type='text' className='donate-input' placeholder='Last Name' />
              <br></br>
              <input type='text' className='donate-input' placeholder='Phone Number' />
              <input type='text' className='donate-input' placeholder='Email' />
              <br></br>
              <input type='text' className='donate-input' placeholder='Street Address' />
              <input type='text' className='donate-input' placeholder='Apt' />
              <br></br>
              <input type='text' className='donate-input' placeholder='City' />
              <input type='text' className='donate-input' placeholder='Country' />
              <br></br>
              <input type='text' className='donate-input' placeholder='Postal Code' />
              <br></br>
              <label>
                <input type='checkbox' />
                Make donation anonymous
              </label>
              <br></br><br></br>

              <h4>PAYMENT INFORMATION</h4>
              <input type='text' className='donate-input' placeholder='Card Number' />
              <input type='text' className='donate-input' placeholder='CVV' />
              <br></br>
              <select className='donate-input'>
                <option value=''>Month</option>
                
              </select>
              <input type='text' className='donate-input' placeholder='Year' />
              <br></br>
              <button className='donate-button'>DONATE</button>
              </div>
        </div>
      </div>
      <NavMenu />
    </div>
  );
}

export default Donate;
