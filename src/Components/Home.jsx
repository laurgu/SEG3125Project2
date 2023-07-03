import React from 'react';
import '../Styles/Home.css';
import '../Styles/General.css';
import NavMenu from './NavMenu';

function Home(){
  return (
    <div className='page-setup'>
      <div className='page-content'>
          <h1 className='title'>MUSEUM OF PHOTOGRAPHY</h1>
          <hr />
          <div>
            <br></br>
            <h2 className='right-align'>Exhibit name</h2>
            <p className='right-align'>Short description</p> 
          </div>
          <div className='img-container-home'>
              <img className='home-img' src={require('../Images/placeholder.jpg')} alt='Sample Image' />
              <div className='home-img-border'></div>
          </div>
          <div className="button-container right-position">
            <button className="button learn-more" onClick={() => window.location.href = '/exhibitions'}>LEARN MORE</button>
            <button className="red-button" onClick={() => window.location.href = '/tickets'}>GET TICKETS</button>
          </div>
          
      </div>
      <NavMenu />
    </div>
  );
};

export default Home;
