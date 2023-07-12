import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Home.css';
import '../Styles/General.css';
import NavMenu from './NavMenu';

function Home() {
  const images = [
    { src: require('../Images/Home/quarries.jpg'), exhibitName: 'QUARRIE\'S MEN', description: 'Photographer Nader Shaadallah captures the process of white limestore querries craft in Minya, Egypt' },
    { src: require('../Images/Home/matrialarts.jpg'), exhibitName: 'SHAOLIN KUNGFU', description: 'Photographer Luo Pin Xi captures images from a famous Shaolin Kungfu school in China.' },
    { src: require('../Images/Home/brothel.jpg'), exhibitName: 'ATHENS STUDIO', description: 'In this exhibition, photographer Diego Mayon reveals the discretely branded top class brothels in Greece.' },
  ];

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

  const { src, exhibitName, description } = images[currentImage];

  return (
    <div className="page-setup">
      <div className="page-content">
        <h1 className="title">MUSEUM OF PHOTOGRAPHY</h1>
        <hr />
        <br></br><br></br>
        <div className="row">
        <div className="col-md-5 d-flex align-items-end justify-content-start">
            <div className="button-container">
                <Link to="/exhibitions" className='home-button button'>
                  LEARN MORE
                </Link>
              <Link to="/tickets" className='home-button red-button'>
                GET TICKETS
              </Link>
            </div>
          </div>
          <div className="col-md-7">
            <div>
              <h2 className="right-align">{exhibitName}</h2>
              <p className="right-align" style={{ width: '100%', wordWrap: 'break-word', textAlign: 'right', marginLeft: 'auto' }}>
                {description}
              </p>
            </div>
          </div>
          
        </div>
        <div className="img-container-home">
          <img className="home-img" src={src} alt="Sample Image" />
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
      <NavMenu />
    </div>
  );
}

export default Home;
