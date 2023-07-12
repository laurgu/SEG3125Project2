import React, { useState, useEffect } from 'react';

function Slideshow({ images }) {
  const [currentImage, setCurrentImage] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage === images.length - 1 ? 0 : prevImage + 1));
      setActiveSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
    }, 5000); // Adjust the interval duration as needed (e.g., 5000ms = 5 seconds)

    return () => {
      clearInterval(interval);
    };
  }, [images.length]);

  return (
    <div className="slideshow">
      <div className="img-container-home">
        <img className="home-img" src={images[currentImage]} alt="Slideshow Image" />
        <div className="home-img-border" />
      </div>
      <div className="slide-indicators">
        {images.map((_, index) => (
          <div
            key={index}
            className={`slide-indicator ${activeSlide === index ? 'active' : ''}`}
            onClick={() => {
              setCurrentImage(index);
              setActiveSlide(index);
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default Slideshow;
