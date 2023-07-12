import React from 'react';
import NavMenu from './NavMenu';
import 'bootstrap/dist/css/bootstrap.css';
import '../Styles/General.css';

function Events(){
    return (
        <div className='page-setup'>
            <div className='page-content'>
                <h1 className='title'>EVENTS</h1>
                <hr />
                <br></br>
                <h2>PRESENTATION FROM SAMUEL BOLDUC</h2>
                <br></br>
                <p>Join photographer Samuel Bolduc for a presentation about his research and exploration techniques to push artistic boundaries. Drawing inspiration from surrealism, Bolduc is an expert at creating a new world through photography. </p>
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
                
                <img className = 'photographer' src = {require('../Images/Events/Samuel/profilepic.jpg')} alt="Image" />
                <img className = 'example-img' src = {require('../Images/Events/Samuel/img.jpg')} alt="Image" />
                <NavMenu />

            </div>

        </div>

    );
}

export default Events;