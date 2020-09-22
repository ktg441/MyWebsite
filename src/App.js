import React, { Component } from 'react';
import "./css/App.css";
import "./css/lights.scss";

//Import various components and/or css files

class App extends Component {

    createLightParticles = () => {
        //console.log("hi");
        var lights = [];
        for (var i = 0; i < 100; i++) {
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
                <object className="backgroundImg" aria-label="polite" ></object>
                { this.createLightParticles() } 
            </React.Fragment>
        );
    }
}

export default App;
