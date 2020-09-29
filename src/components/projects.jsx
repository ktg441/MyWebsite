import React, { Component } from 'react';

/*
Component about my projects
*/
class Projects extends Component {

    constructor() {
        super();
        this.state = {};
    }

    /* When the component loads... */
    componentDidMount() {

    }

    render() {
        return (
            <div id="projects" className="siteHidden">
                <div id="projectHeader"><u>Projects</u></div>
            </div>    
        );
    }

}

export default Projects;