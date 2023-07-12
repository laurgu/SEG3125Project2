import React from 'react';
import NavMenu from './NavMenu';
import Slideshow from './Slideshow';
import '../Styles/General.css';
import 'bootstrap/dist/css/bootstrap.css';

function Exhibitions() {
  const africa_blues = [
    require('../Images/Africa-Blues/afrcia1.jpg'),
    require('../Images/Africa-Blues/africa2.jpg'),
    require('../Images/Africa-Blues/africa3.jpg'),
    require('../Images/Africa-Blues/africa4.jpg')
  ];

  const athens_studio = [
    require('../Images/Athens-Studio/Brothel1.jpg'),
    require('../Images/Athens-Studio/Brothel2.jpg'),
    require('../Images/Athens-Studio/Brothel3.jpg'),
    require('../Images/Athens-Studio/Brothel4.jpg')
  ];

  const billions = [
    require('../Images/Billions-Fireflies/fireflies1.jpg'),
    require('../Images/Billions-Fireflies/fireflies2.jpg'),
    require('../Images/Billions-Fireflies/fireflies3.jpg'),
    require('../Images/Billions-Fireflies/fireflies4.jpg')
  ]

  const  inheritor = [
    require('../Images/Inheritor/inheritor1.jpg'),
    require('../Images/Inheritor/inheritor2.jpg'),
    require('../Images/Inheritor/inheritor3.jpg'),
    require('../Images/Inheritor/inheritor4.jpg')    
  ]

  const quarries = [
    require('../Images/Quarrie\'s-men/quarrie1.jpg'),
    require('../Images/Quarrie\'s-men/quarrie2.jpg'),
    require('../Images/Quarrie\'s-men/quarrie3.jpg'),
    require('../Images/Quarrie\'s-men/quarrie4.jpg')
  ]

  const shaolin = [
    require('../Images/Shaolin-Kung-Fu/martial-arts1.jpg'),
    require('../Images/Shaolin-Kung-Fu/martial-arts2.jpg'),
    require('../Images/Shaolin-Kung-Fu/martial-arts3.jpg'),
    require('../Images/Shaolin-Kung-Fu/martial-arts4.jpg')
  ]


  return (
    <div>
      <div className="exhibitions page-setup">
        <div className="page-content">
          <h1 className="title">EXHIBITIONS</h1>
          <br></br>
          <hr />
          <br></br><br></br>
          <p>The Museum of Photography offers a dynamic selection of exhibitions, including both seasonal and permanent showcases. Our seasonal exhibitions rotate regularly. Discover the power of visual storytelling through our diverse and collection of photography exhibitions.</p>
          <br></br>
          <h3>SEASONAL</h3>
          <br></br>
          <Slideshow images={athens_studio} />
          <div className='row'>
            <div className='col-6'>
              <h2>ATHENS STUDIO</h2>
            </div>
            <div className='col-6'>
              <h2 className='right-align'>Until 15-09-2023</h2>
              <br></br>
            </div>
            <p>Brothels have been legal in Greece since 1999. Photographer Diego Mayon sheds light on this hidden facet of society through photographs of top-class brothels, labeled studios. 
            </p>
          </div>

          <Slideshow images={quarries} />
          <div className='row'>
            <div className='col-6'>
              <h2>QUARRIE'S MEN</h2>
            </div>
            <div className='col-6'>
              <h2 className='right-align'>Until 15-09-2023</h2>
              <br></br>
            </div>
            <p>In Minya, Egypt, the white limestore quarries craft is a precise four phase process. Photographer Nader Shaadallah captures photos documenting workers as they produce white limestone blocks.
            </p>
          </div>

          <Slideshow images={shaolin} />
          <div className='row'>
            <div className='col-6'>
              <h2>SHAOLIN KUNGFU</h2>
            </div>
            <div className='col-6'>
              <h2 className='right-align'>Until 15-09-2023</h2>
              <br></br>
            </div>
            <p>Shalolin Kungfu, also knows as Shaolin Wushu is one of the famous Wushu schools in China. Photographer Luo Pin Xi captures the art of Shaolin Kungfu and it's importance as a traditional Chinese martial art.
            </p>
          </div>

        </div>
      </div>

      <div className="inverse">
        <div className="page-content">
          <br />
          <br />
          <h3>PERMANENT</h3>
          <br />
          <Slideshow images={africa_blues} />
          <h2>AFRICA BLUES</h2>
          <br></br>
           <p>Photographers Edoardo Delille and Giulia Piermartiri demonstrate what the Mozambique landcape may look like due to climate change. As one of the most climate-vulnerable countries,
              the projected landcape's show the potentially drastic changes that could occur in the not too distant future.
            </p>

            <Slideshow images={billions} />
          <h2>BILLIONS OF SYNCHRONOUS FIREFLIES LIGHT UP A TIFER RESERVE</h2>
          <br></br>
           <p>In photographer Sriram Murali's hometown of Pollachi, India, far from town lights, is the forests of the Anamalai Tiger Reserve. Murali captures the very rare sight of millions of congregated fireflies lighting up the forest.
            </p>

            <Slideshow images={inheritor} />
          <h2>INHERITOR</h2>
          <br></br>
           <p>Chinese opera, a tradition that dates back more than a thousand years, is an important part of Chinese culture. This tradition is being overshadowed by the flashiness of modernity. Photographer Yanan Li captures difficulty of perserving this tradition as fewer and fewer make an effort to understand this ancient art. 
            </p>
            <br></br><br></br>
        </div>
      </div>
      <NavMenu />
    </div>
  );
}

export default Exhibitions;
