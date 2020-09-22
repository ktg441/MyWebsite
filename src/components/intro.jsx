import React, { Component } from 'react';
import Bounce from "react-reveal/Bounce";

class Intro extends Component {

    constructor() {
        super();
        this.state = { show: false };
    }

    componentDidMount() {
        this.toggleIntro();
        setTimeout(this.loadSite, 3500);
    }

    toggleIntro = () => {
        this.setState({ show: !this.state.show});
    }

    loadSite = () => {
        this.toggleIntro();
        setTimeout(function() { document.getElementById("introContainer").remove()}, 4000);
    }

    render() {
        return (
            <div id="introContainer">
                <div id="introTextContainer">
                    <h1 id="introText">
                        <Bounce top cascade when={this.state.show}>
                            Kiran Thomas Payne
                        </Bounce>
                    </h1>
                </div>
            </div>
        );
    }

}

export default Intro;