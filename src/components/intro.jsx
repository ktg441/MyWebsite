import React, { Component } from 'react';
import Bounce from "react-reveal/Bounce";

import Logo from "../media/Logo.png";

/*
Component that plays the into animations and then loads the website after
*/
class Intro extends Component {

    constructor() {
        super();
        this.state = { show: false };
    }

    /* When the component loads, toggle intro on */
    componentDidMount() {
        this.toggleIntro();
        setTimeout(this.loadSite, 3800);
    }

    toggleIntro = () => {
        this.setState({ show: !this.state.show});
    }

    /* Load main content */
    loadSite = () => {
        this.toggleIntro();
        document.getElementsByClassName("backgroundImgFull")[0].className = "backgroundImgFade";
        setTimeout(function() { 
            document.getElementById("introContainer").remove();
        }, 4000);
    }

    render() {
        return (
            <div id="introContainer">
                <div id="introTextContainer">
                    <img src={Logo} className="fadeLogo"></img>
                    <h1 id="introText">
                        <Bounce top cascade when={this.state.show}>
                            Kiran Thomas Payne
                        </Bounce>
                    </h1>
                    <div id="linesContainer">
                        <div className="mainLine"></div>
                        <div className="loadLine"></div>
                        <div className="loadLine"></div>
                        <div className="loadLine"></div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Intro;