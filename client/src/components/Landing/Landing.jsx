import React from 'react'
import Video from '../../img/landingVideo.mp4';
import { Link } from 'react-router-dom';
import './Landing.css';

const LandingPage = () => {
    
    return (
        <div className="landing">

            <video autoPlay muted loop id="myVideo">
                <source src={Video} type="video/mp4"></source>
            </video>

            <div className="landingText">
                <span className="landingName">Doggys app</span>
                <div className="landingWrapper">
                    <h1 className="landingTitle">Wants know all about our dogs?</h1>
                    <p>Let's go and explore your Doggys.</p>

                    <div className="landingLinks">
                        <Link className="landingButton" to="/home">
                            <button>Let's go</button>
                        </Link>

                        <Link className="landingAbout" to="/about">
                            <button>About us</button>
                        </Link>
                    </div>
                </div>
            </div>
            
        </div>
    );

};

export default LandingPage;