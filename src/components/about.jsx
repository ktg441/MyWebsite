import React, { Component } from 'react';

import Picture from '../media/KiranPumpkingPatch.jpg';

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
            <div id="about-me">
                <div id="aboutDescription">
                    <p>Hello There</p>
                    <p>123</p>
                </div>
                <div id="aboutPicture">
                    <img src={Picture} className="aboutPic" alt="Sitting in a pumpking patch" />
                </div>
            </div>
        );
    }

}

export default About;