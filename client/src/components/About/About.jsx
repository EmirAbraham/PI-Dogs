import React from 'react';
import IconArrow from '../Detail/IconArrow'
import LinkedIn from '../../img/linkedin.png';
import GitHub from '../../img/github.png';
import { Link, useHistory } from "react-router-dom";
import './About.css';

const About = () => {
    const history = useHistory();
    const goHome = () => history.push('/home');

    return (
        <div className="about">
        
            <div className="aboutNav">

                <div className="aboutReturn">
                    <Link to="/" className="return">
                        <IconArrow />
                        <p>Return</p>
                    </Link>
                </div>

                <div className="aboutHome">
                    <button onClick={goHome}>Doggys</button>
                </div>

            </div>

            <div className="aboutContent">
                <div className="aboutWrapper">
                    <div className="firstAbout">
                        <h1>About us</h1>
                        <p>Here at Doggys, we make sure you know everything about your favourits dogs.</p>
                        <p>We are experts at caring for your dog, getting the data you need and presenting it to you in the best way possible.</p>
                        <p>In the easiest way possible, we allow you to filter, sort, and even randomize your search.</p>
                        <p>Think we are missing a breed? You can submit it! We are proud to provide a reliable database to users.</p>
                    </div>

                    <div className="secondAbout">
                        <h1>Made with care.</h1>
                        <p>This page is a work from Emir Abraham.</p>
                        <p>Fonts used are Rubik, Montserrat and Fira Sans.</p>
                        <p>Social networks and search icons are from flaticon. Landing video is from Pexels.</p>
                    </div>
                </div>
            </div>

            <div className="aboutFooter">
                <div className="credits">
                    <ul>
                        <li>
                            <a className="bau" href="/about">Emir Jose Abraham, 2023</a>
                        </li>
                        <li>
                            <ul>
                                <li>???</li>
                            </ul>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/emirabraham/"><img width="30" height="30" src={LinkedIn} alt="linkedin"/></a>
                        </li>
                        <li>
                            <ul>
                                <li>???</li>
                            </ul>
                        </li>
                        <li>
                            <a href="https://github.com/EmirAbraham"><img width="30" height="30" src={GitHub} alt="github"/></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>     
    );
}

export default About;