import React from 'react';
import NavMenu from './NavMenu';
import '../Styles/General.css';
import 'bootstrap/dist/css/bootstrap.css';
import '../Styles/Collection.css';

function Collection() {
  return (
    <div>
      <div className='standard'>
        <div className='page-content'>
          <h1 className='title'>COLLECTION</h1>
          <hr />
          <h3 className='right-align'>Search</h3>
          <h3 className='right-align'>Filter</h3>
          <h3 className='right-align'>Sort</h3>
          <br /><br /><br />
        </div>
      </div>

      <div className='inverse'>
        <div className='page-content'>
          <div className='center'>
            <div className='row collection'>
              <div className='col-4 collection-item'>
                <div className='image-container'>
                  <img src={require('../Images/placeholder.jpg')} alt='Sample Image' />
                </div>
                <div className='card'>
                  <div className='card-content'>
                    <h5 className='inline'>Title</h5>
                    <p className='inline'>DD-MM-YYYY</p>
                  </div>
                  <h5 className='block'>Artist</h5>
                </div>
              </div>
              <div className='col-4 collection-item'>
                <div className='image-container'>
                  <img src={require('../Images/placeholder.jpg')} alt='Sample Image' />
                </div>
                <div className='card'>
                  <div className='card-content'>
                    <h5 className='inline'>Title</h5>
                    <p className='inline'>DD-MM-YYYY</p>
                  </div>
                  <h5 className='block'>Artist</h5>
                </div>
              </div>
              <div className='col-4 collection-item'>
                <div className='image-container'>
                  <img src={require('../Images/placeholder.jpg')} alt='Sample Image' />
                </div>
                <div className='card'>
                  <div className='card-content'>
                    <h5 className='inline'>Title</h5>
                    <p className='inline'>DD-MM-YYYY</p>
                  </div>
                  <h5 className='block'>Artist</h5>
                </div>
              </div>
            </div>

            <div className='row collection'>
              <div className='col-4 collection-item'>
                <div className='image-container'>
                  <img src={require('../Images/placeholder.jpg')} alt='Sample Image' />
                </div>
                <div className='card'>
                  <div className='card-content'>
                    <h5 className='inline'>Title</h5>
                    <p className='inline'>DD-MM-YYYY</p>
                  </div>
                  <h5 className='block'>Artist</h5>
                </div>
              </div>
              <div className='col-4 collection-item'>
                <div className='image-container'>
                  <img src={require('../Images/placeholder.jpg')} alt='Sample Image' />
                </div>
                <div className='card'>
                  <div className='card-content'>
                    <h5 className='inline'>Title</h5>
                    <p className='inline'>DD-MM-YYYY</p>
                  </div>
                  <h5 className='block'>Artist</h5>
                </div>
              </div>
              <div className='col-4 collection-item'>
                <div className='image-container'>
                  <img src={require('../Images/placeholder.jpg')} alt='Sample Image' />
                </div>
                <div className='card'>
                  <div className='card-content'>
                    <h5 className='inline'>Title</h5>
                    <p className='inline'>DD-MM-YYYY</p>
                  </div>
                  <h5 className='block'>Artist</h5>
                </div>
              </div>
            </div>
          </div>

          <br></br><br></br>
        </div>

      </div>
      <NavMenu />
    </div>
  );
}

export default Collection;
