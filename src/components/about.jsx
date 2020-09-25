import React, { Component } from 'react';

import Picture from '../media/KiranPumpkingPatch.jpg';
import DownArrow from '../media/down-arrow.png'; //

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
                <div id="about-me">
                    <div id="aboutDescription">
                        <p>Hello There</p>
                        <p>123</p>
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
            </div>
        );
    }

}

export default About;