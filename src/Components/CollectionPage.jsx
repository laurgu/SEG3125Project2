import React from 'react';
import CollectionCard from './CollectionCard';

function CollectionPage({ cardsData }) {
  return (
    <div className='center'>
      <div className='row collection'>
        {cardsData.map((card, index) => (
          <CollectionCard
            key={index}
            title={card.title}
            date={card.date}
            artist={card.artist}
            image={card.image}
          />
        ))}
      </div>
    </div>
  );
}

export default CollectionPage;
