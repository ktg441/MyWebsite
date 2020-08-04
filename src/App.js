import React, { Component } from 'react';

import "./css/App.css";

import Banner from "./media/banner.jpg"
//Import various components and/or css files

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <div className = "Banner">
                    <img 
                    src = {Banner} 
                    className = "img-fluid"
                    alt = "Purple Horizon"
                    />
                    <div className = "OnBanner">
                        <p className = "h1 font-italic">
                            Kiran Thomas Payne
                        </p>
                        <p className = "h2 text-muted font-italic">
                            Current Title
                        </p>
                    </div>
                </div>
                <main className = "container">

                </main>
            </React.Fragment>
        );
    }
}

export default App;
