import '../Styles/General.css'
import React from 'react';

const CollectionCard = ({ title, date, artist, image }) => {
  return (
    <div className='col-6 collection-item'>
      <div className='image-container'>
        <img src={image} alt='Sample Image' />
      </div>
      <div className='card'>
        <div className='card-content'>
          <h5 className='inline'>{title}</h5>
          <p className='inline'>{date}</p>
        </div>
        <h5 className='block'>{artist}</h5>
      </div>
    </div>
  );
};

export default CollectionCard;
