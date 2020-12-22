import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmileBeam } from '@fortawesome/free-solid-svg-icons';
import MediaQuery from 'react-responsive';

import Picture from '../media/KiranPumpkingPatch.jpg';
import DownArrow from '../media/down-arrow.png';

/*
Component that information about me
*/
class About extends Component {

    constructor() {
        super();
        this.state = {};
    }

    /* When the component loads... */
    componentDidMount() {

    }

    render() {

        return (
            <div id="aboutWrapper" className="siteHidden">
                <MediaQuery minDeviceWidth={768}>
                    <div id="about-me">
                        <div id="aboutDescription">
                            <h1>Welcome to my website!</h1>
                            <p>
                                My name is Kiran Payne and I am a Computer Science Graduate from Purdue University.
                                I am currently a part-time developer/researcher for the C-Design lab where I help 
                                research Augmented Reality (AR) and Virtual Reality (VR) technology and how it can 
                                interact with microcontrollers. My background consists mainly of IT/Security through 
                                various internship and co-op opportunities, however, my focus and future lies within 
                                application and software development. I am actively seeking entry-level opportunities 
                                in either application or game development.
                            </p>
                            <p>
                                Over the last three years of my undergrad career I have: explored numerous topics 
                                in CS, learned how to properly manage collaborative team work, and gained exposure to 
                                the corporate environment and agile development methodologies. My experience as a 
                                student has provided me with a well-rounded taste of a future life in Computer 
                                Science and I am excited to see where my career takes me.
                            </p>
                            <p>
                                In my free time (Pre Covid-19), I enjoy meeting and connecting with people as well as 
                                experiencing new things. My hobbies consist of video games, hiking, and water sports 
                                (Unfortunately this has been hard to keep up with in the midwest!). Lately I have been 
                                researching tech repair guides and have begun a small side business repairing and modifying 
                                video game consoles. At the moment I am only modifying Nintendo Switch consoles but I hope 
                                to expand soon {<FontAwesomeIcon icon={faSmileBeam} />} 
                            </p>
                        </div>
                        <div id="aboutPicture">
                            <img src={Picture} className="aboutPic" alt="Sitting in a pumpking patch" />
                        </div>
                        <div id="downArrow">
                            <a href="#resume">
                                <img src={DownArrow} className="downArrowPic" alt="Down Arrow" />
                            </a>
                        </div>
                    </div>
                </MediaQuery>
                <MediaQuery maxDeviceWidth={767}>
                    <div id="about-me-mobile">
                        <h1 id="titleMobile">Welcome to my website!</h1>
                        <div id="aboutPictureMobile">
                            <img src={Picture} className="aboutPic" alt="Sitting in a pumpking patch" />
                        </div>
                        <div id="aboutDescriptionMobile">
                            <p>
                                My name is Kiran Payne and I am a Computer Science Graduate from Purdue University.
                                I am currently a part-time developer/researcher for the C-Design lab where I help 
                                research Augmented Reality (AR) and Virtual Reality (VR) technology and how it can 
                                interact with microcontrollers. My background consists mainly of IT/Security through 
                                various internship and co-op opportunities, however, my focus and future lies within 
                                application and software development. I am actively seeking entry-level opportunities 
                                in either application or game development.
                            </p>
                            <p>
                                Over the last three years of my undergrad career I have: explored numerous topics 
                                in CS, learned how to properly manage collaborative team work, and gained exposure to 
                                the corporate environment and agile development methodologies. My experience as a 
                                student has provided me with a well-rounded taste of a future life in Computer 
                                Science and I am excited to see where my career takes me.
                            </p>
                            <p>
                                In my free time (Pre Covid-19), I enjoy meeting and connecting with people as well as 
                                experiencing new things. My hobbies consist of video games, hiking, and water sports 
                                (Unfortunately this has been hard to keep up with in the midwest!). Lately I have been 
                                researching tech repair guides and have begun a small side business repairing and modifying 
                                video game consoles. At the moment I am only modifying Nintendo Switch consoles but I hope 
                                to expand soon {<FontAwesomeIcon icon={faSmileBeam} />} 
                            </p>
                        </div>
                    </div>
                </MediaQuery>
            </div>
            
        );
    }

}

export default About;