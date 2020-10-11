import React, { Component } from 'react';

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import { Button } from 'react-bootstrap';

import Icon from '@iconify/react';
import firebaseIcon from '@iconify/icons-logos/firebase';

/*
Component about my projects
*/
class Projects extends Component {

    constructor() {
        super();
        this.state = {
            filters: {"Work": true, "Game": true, "Web": true, "Misc": true },
            toRender: []
        };
        this.applyFilters = this.applyFilters.bind(this);
        this.changeFilters = this.changeFilters.bind(this);

        //Project windows
        this.renderMP3164 = this.renderMP3164.bind(this);
        this.renderSampleGame = this.renderSampleGame.bind(this);
        this.renderSampleWeb = this.renderSampleWeb.bind(this);
        this.renderSampleMisc = this.renderSampleMisc.bind(this);
    }

    /* When the component loads... */
    async componentDidMount() {
        this.applyFilters();
    }

    /* Projects should load in order by date, regardless of filters applied */
    applyFilters() {
        let filteredProjects = [];

        filteredProjects.push(this.renderMP3164());
        filteredProjects.push(this.renderSampleGame());
        filteredProjects.push(this.renderSampleMisc());

        this.setState({
            toRender: filteredProjects.filter(x => x) //remove nulls
        });        
    }

    changeFilters(filter) {
        const newFilters = this.state.filters;
        newFilters[filter] = !newFilters[filter];
        this.setState({
            filters: newFilters
        })
        this.applyFilters();
        let buttonToUpdate = document.getElementById(filter + "FilterButton");
        buttonToUpdate.style.opacity = buttonToUpdate.style.opacity === "1" || buttonToUpdate.style.opacity === "" ? "0.65" : "1";
    }

    render() {

        return (
            <div id="projects" className="siteHidden">
                <div id="projectHeader"><u>Projects</u></div>
                <div id="projectFilters">
                    Filters:
                    <Button id="WorkFilterButton" variant="primary" className="filter" onClick={() => this.changeFilters('Work')}>Work</Button>
                    <Button id="GameFilterButton" variant="success" className="filter" onClick={() => this.changeFilters('Game')}>AR/VR/Game Dev</Button>
                    <Button id="WebFilterButton" variant="warning" className="filter" onClick={() => this.changeFilters('Web')}>Web Dev</Button>
                    <Button id="MiscFilterButton" variant="danger" className="filter" onClick={() => this.changeFilters('Misc')}>Misc</Button>
                </div>
                <div id="projectSliderContainer">
                    <AwesomeSlider>
                        { this.state.toRender }
                    </AwesomeSlider>
                </div>
            </div>    
        );
    }

    renderMP3164() {
        if (this.state.filters["Work"]) {
            return (
                <div id="MP3164" className="stack_desc work">
                    <div className="left_stack inner">
                        <i className="devicon-javascript-plain colored"></i>
                        <Icon icon={firebaseIcon} valign="center" />
                    </div>
                    <div className="right_desc inner">
                        <p>Right</p>
                    </div>
                </div> 
            );
        }
        return null;
    }

    renderSampleGame() {
        if (this.state.filters["Game"]) {
            return (
                <div className="stack_desc game">
                    <div className="left_stack inner">
                        <p>Hey</p>
                    </div>
                    <div className="right_desc inner">
                        <p>Hi</p>
                    </div>
                </div> 
            );
        }
        return null;
    }

    renderSampleWeb() {
        if (this.state.filters["Web"]) {
            return (
                <div className="stack_desc web">
                    <div className="left_stack inner">
                        <p>Hey</p>
                    </div>
                    <div className="right_desc inner">
                        <p>Hi</p>
                    </div>
                </div> 
            );
        }
        return null;
    }

    renderSampleMisc() {
        if (this.state.filters["Misc"]) {
            return (
                <div className="stack_desc misc">
                    <div className="left_stack inner">
                        <p>Hey</p>
                    </div>
                    <div className="right_desc inner">
                        <p>Hi</p>
                    </div>
                </div> 
            );
        }
        return null;
    }

}

export default Projects;