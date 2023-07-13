import React from 'react';
import NavMenu from './NavMenu';
import 'bootstrap/dist/css/bootstrap.css';
import '../Styles/General.css';
import '../Styles/Events.css'
import SlideShow from './Slideshow'

function Events(){

    const samuel = [
        require('../Images/Events/Samuel/img1.jpg'),
        require('../Images/Events/Samuel/img2.jpg'),
        require('../Images/Events/Samuel/img3.jpg'),
        require('../Images/Events/Samuel/img4.jpg')
      ]


    return (
        <div className='page-setup'>
            <div className='page-content'>
                <h1 className='title'>EVENTS</h1>
                <hr />
                <br></br>
                <div  className='row'>
                    <div className='col-2'>
                         <img className = 'photographer-icon' src = {require('../Images/Events/Samuel/profilepic.jpg')} alt="Image" />
                    </div>
                    <div className='col-10'>
                        <h2>PRESENTATION FROM SAMUEL BOLDUC</h2>
                        <br></br>
                        <p>Join photographer Samuel Bolduc for a presentation about his research and exploration techniques to push artistic boundaries. Drawing inspiration from surrealism, Bolduc is an expert at creating a new world through photography. </p>
                    </div>
                </div>
                        
                <br></br>
                <div className='row'>
                    <div className='col-4'>
                    <h5>Audience:</h5>
                        <p>This presentation is desgined for photographers of all levels</p>
                    </div>
                    
                    <div className='col-4'>
                        <h5>Equipment:</h5>
                        <p>No equipment is required for this presentation</p>
                    </div>
                    <div className='col-4'>
                        <h5>Date:</h5>
                        <p>08/08/2023 <br></br>12:30pm-2:00pm</p>
                    </div>
                </div>
                <SlideShow images={samuel}/>
            

                <div  className='row add-margintop-contact'>
                
                    <div className='col-2'>
                        
                         <img className = 'photographer-icon' src = {require('../Images/Events/Undisplayed/eventicon.jpg')} alt="Image" />
                    </div>
                    <div className='col-10'>
                        <h2>TOUR OF UNDISPLAYED WORKS</h2>
                        <br></br>
                        <p>Join photographer Samuel Bolduc for a presentation about his research and exploration techniques to push artistic boundaries. Drawing inspiration from surrealism, Bolduc is an expert at creating a new world through photography. </p>
                    </div>
                </div>
                        
                <br></br>
                <div className='row'>
                    <div className='col-4'>
                    <h5>Audience:</h5>
                        <p>Anyone</p>
                    </div>
                    
                    <div className='col-4'>
                        <h5>Equipment:</h5>
                        <p>None</p>
                    </div>
                    <div className='col-4'>
                        <h5>Date:</h5>
                        <p>Every Saturday<br></br>5:00pm-6:30pm</p>
                    </div>
                </div>
                <div className='img-container-home'>
                    <img className = 'home-img' src = {require('../Images/Events/Undisplayed/img1.jpg')} alt = "Image" />
                    <div className="home-img-border" />
                    <br></br><br></br><br></br>
                </div>
                
                <NavMenu />

            </div>

        </div>

    );
}

export default Events;