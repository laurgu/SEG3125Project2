import React from 'react';
import NavMenu from './NavMenu';
import '../Styles/General.css';
import '../Styles/Exhibitions.css'
import 'bootstrap/dist/css/bootstrap.css';

function Exhibitions() {
  return (
    <div>
      <div className='exhibitions page-setup'>
        <div className='page-content'>
          <h1>EXHIBITIONS</h1>
          <hr />

          <h3>SEASONAL</h3>
          <br></br>
          <div className='img-container-home'>
            <img className='home-img' src={require('../Images/placeholder.jpg')} alt='Sample Image' />
            <div className='home-img-border'></div>
            <br></br><br></br><br></br>
         </div>
         
          <div className='row'>
            <div className='col-6'><h2>Title</h2></div>
            <div className='col-6'>
              <h3 className='right-align'> DD-MM-YYYY to DD-MM-YYYY</h3>
            </div>
            <p className = 'left-align'>Description of the exhibit</p>
          </div>
        </div>

      </div>

      <div className='inverse'>
        <div className='page-content'>
          <br />
          <br />
          <h3>PERMANENT</h3>
          <br />

          <div className='img-container-home'>
            <img className='home-img' src={require('../Images/placeholder.jpg')} alt='Sample Image' />
            <div className='home-img-border'></div>
            <br></br><br></br><br></br>
         </div>
          <div className='row'>
            <div className='col-6'><h2>Title</h2></div>
            <div className='col-6'>
              <h3 className='right-align'>
                DD-MM-YYYY to DD-MM-YYYY</h3>
            </div>
            <p className = 'left-align'>Description of the exhibit</p>
          </div>
        </div>
      </div>
      <NavMenu />
    </div>
  );
}

export default Exhibitions;
