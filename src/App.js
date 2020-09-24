import React, { Component } from 'react';
import "./css/App.css";
import "./css/About.css"
import "./css/Animations.scss";

import 'bootstrap/dist/css/bootstrap.min.css';

import Intro from "./components/intro";
import CustomNavbar from "./components/navbar";
import About from "./components/about";
//Import various components and/or css files

class App extends Component {

    /* Creates randomly moving particles around the screen */
    createLightParticles = () => {
        var lights = [];
        for (var i = 0; i < 20; i++) {
            lights.push(
            <div key ={"outerCircle" + i} className="circle-container">
                <div key={"innerCircle" + i} className="circle"></div>
            </div>
            );
        }

        return <div id="lightsContainer" className="lightsContainer" >{lights}</div>;
    }

    render() {
        return (
            <React.Fragment>
                <object id="bgImg" className="backgroundImgFull" aria-label="polite" ></object>
                { this.createLightParticles() } 
                <Intro />
                <div id="fullSite" className="siteHidden">
                    <CustomNavbar />
                    <About />
                </div>
            </React.Fragment>
        );
    }
}

export default App;
