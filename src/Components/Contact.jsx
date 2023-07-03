import React from 'react';
import '../Styles/Home.css';
import '../Styles/General.css';
import '../Styles/Contact.css';
import 'bootstrap/dist/css/bootstrap.css';
import NavMenu from './NavMenu';
function Contact() {
  return (
    <div>
      <div className='page-setup'>
        <div className='page-content'>
          <h1 className='title'>CONTACT</h1>
          <hr />
       
          <img className='contact-icon' src={require('../Images/placeholder.jpg')} alt='Sample Image' />
          <h4 className='inline'>(XXX)XXX-XXXX</h4>
         
          <img className='contact-icon add-space' src={require('../Images/placeholder.jpg')} alt='Sample Image' />
          <h4 className='inline'>email@mop.ca</h4>
          <div>
            <br></br>
            <h4 className='red'>If you have any questions, would like to get in touch with the museum, or have any suggestions,<br></br> please feel free to use the form below. We'd love to hear from you!</h4>
            <br></br>
          </div>

          <form>
            <div className='row'>
              <div className='col-5'>
                <div className='inline'>
                  <input type='text' placeholder='Name' required />
                </div>

                <div className='add-space inline'>
                  <input className='' type='email' placeholder='Email' required />
                </div>

                <div>
                  <textarea className='comment-box' placeholder='Comments' rows='4' required></textarea>
                </div>
              </div>
              <div className='col-7' style={{ textAlign: 'right' }}>
                <img className='contact-img' src={require('../Images/placeholder.jpg')} alt='Sample Image' />
              </div>
            </div>

            <button className='red-button top-mar' type='submit'>Submit</button>
          </form>
        </div>
      </div>
      <NavMenu />
    </div>
  );
}

export default Contact;
