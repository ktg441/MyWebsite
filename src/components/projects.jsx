import React, { Component } from 'react';

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import { Button } from 'react-bootstrap';

import AndroidLogo from '../media/projects/Android-Robot/Android-Robot-01.svg';
import ArduinoLogo from '../media/projects/Arduino/Arduino-01.svg';
import ElasticLogo from '../media/projects/Elastic/Elastic-01.svg';
import ElasticSearchLogo from '../media/projects/Elasticsearch/Elasticsearch-01.svg';
import BlocklyLogo from '../media/projects/Blockly/Blockly-01.svg';
import FirestoreLogo from '../media/projects/Firestore/Firestore-01.svg';
import GoogleCloudLogo from '../media/projects/Google-Cloud-Platform/Google-Cloud-Platform-01.svg';
import JSLogo from '../media/projects/JavaScript/JavaScript-01.svg';
import KibanaLogo from '../media/projects/Kibana/Kibana-01.svg';
import PuppeteerLogo from '../media/projects/Puppeteer/Puppeteer-01.svg';
import PythonLogo from '../media/projects/Python/Python-01.svg';
import UnityEngineLogo from '../media/projects/Unity-Game-Engine/Unity-Game-Engine-01.svg';


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
        this.renderMP3164_1 = this.renderMP3164_1.bind(this);
        this.renderMP3164_2 = this.renderMP3164_2.bind(this);
        this.renderThreatIntel = this.renderThreatIntel.bind(this);
        this.renderBPMHelper = this.renderBPMHelper.bind(this);
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

        filteredProjects.push(this.renderMP3164_1());
        filteredProjects.push(this.renderMP3164_2());
        filteredProjects.push(this.renderSampleGame());
        filteredProjects.push(this.renderThreatIntel());
        filteredProjects.push(this.renderBPMHelper());
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
                    <AwesomeSlider style={{ '--organic-arrow-color': '#000000' }}>
                        { this.state.toRender }
                    </AwesomeSlider>
                </div>
            </div>    
        );
    }

    renderMP3164_1() {
        if (this.state.filters["Work"]) {
            return (
                <div id="MP3164_1" className="stack_desc work">
                    <div className="projectDate">
                        <u><b>July 2020 - August 2020</b></u>
                    </div>
                    <div className="left_stack inner">
                        <div style={{ display: 'inline-block', width: '50%'}}>
                            <div style={{ height: '50%'}}>
                                <img src={JSLogo} className="colImg" alt="Javascript Logo" />
                            </div>
                            <div style={{ height: '50%'}}>
                                <img src={ArduinoLogo} className="colImg" alt="Arduino Logo" />
                            </div>
                        </div>
                        <div style={{ display: 'inline-block', width: '50%'}}>
                            <div style={{ height: '50%'}}>
                                <img src={FirestoreLogo} className="colImg" alt="Firestore Logo" />
                            </div>
                            <div style={{ height: '50%'}}>
                                <img src={BlocklyLogo} className="colImg" alt="Google Blockly Logo" />
                            </div>
                        </div>
                    </div>
                    <div className="right_desc inner">
                        <u><b>Web-based Electronics Simulation Tool</b></u>
                        <p>
                           For a research project, I led our team in developing a Block-programming language with Google Blockly's API. 
                           This pairs together with a simulation tool that will compile the block-code and show the user the expected output as each function would run on our custom hardware. 
                           The prominent frameworks this application is built on are displayed on the left-hand side. 
                        </p>
                        <p className="footnote">
                            *Unfortunately due to the (temporary) confidential nature of this project I cannot share explicit photos, videos, or source code at this time. 
                            For further details, please contact me directly.
                        </p>
                    </div>
                </div> 
            );
        }
        return null;
    }

    renderMP3164_2() {
        if (this.state.filters["Work"]) {
            return (
                <div id="MP3164_2" className="stack_desc work">
                    <div className="projectDate">
                        <u><b>March 2020 - May 2020</b></u>
                    </div>
                    <div className="left_stack inner">
                        <div style={{ display: 'inline-block', width: '50%'}}>
                            <div style={{ height: '50%'}}>
                                <img src={UnityEngineLogo} className="colImg" alt="Unity Engine Logo" />
                            </div>
                            <div style={{ height: '50%'}}>
                                <img src={ArduinoLogo} className="colImg" alt="Arduino Logo" />
                            </div>
                        </div>
                        <div style={{ display: 'inline-block', width: '50%'}}>
                            <div style={{ height: '50%'}}>
                                <img src={GoogleCloudLogo} className="colImg" alt="Google Cloud Logo" />
                            </div>
                            <div style={{ height: '50%'}}>
                                <img src={AndroidLogo} className="colImg" alt="Android Logo" />
                            </div>
                        </div>
                    </div>
                    <div className="right_desc inner">
                        <u><b>AR-IoT Mobile Application</b></u>
                        <p>
                            For a research project, I completely redesigned an existing Augmented Reality (AR) application made in Unity. 
                            The first major change was integrating Photon's Unity Networking package to incorporate realtime multiplayer into the app. 
                            The second major change was using Google ARCore's Cloud Anchors in order to synchronize local AR content across multiple devices. 
                            The prominent frameworks this application is built on are displayed on the left-hand side. 
                        </p>
                        <p className="footnote">
                            *Unfortunately due to the (temporary) confidential nature of this project I cannot share explicit photos, videos, or source code at this time. 
                            For further details, please contact me directly.
                        </p>
                    </div>
                </div> 
            );
        }
        return null;
    }

    renderThreatIntel() {
        if (this.state.filters["Work"]) {
            return (
                <div id="ThreatIntel" className="stack_desc work">
                    <div className="projectDate">
                        <u><b>June 2020 - August 2020</b></u>
                    </div>
                    <div className="left_stack inner">
                        <div style={{ display: 'inline-block', width: '50%'}}>
                            <div style={{ height: '50%'}}>
                                <img src={ElasticLogo} className="colImg" alt="Elastic Logo" />
                            </div>
                            <div style={{ height: '50%'}}>
                                <img src={KibanaLogo} className="colImg" alt="Kibana Logo" />
                            </div>
                        </div>
                        <div style={{ display: 'inline-block', width: '50%'}}>
                            <div style={{ height: '50%'}}>
                                <img src={ElasticSearchLogo} className="colImg" alt="Elasticsearch Logo" />
                            </div>
                            <div style={{ height: '50%'}}>
                                <img src={PythonLogo} className="colImg" alt="Python Logo" />
                            </div>
                        </div>
                    </div>
                    <div className="right_desc inner">
                        <u><b>Threat Intelligence Dashboard</b></u>
                        <p>
                            During my internship at Ecolab, I created a foundational Threat Intelligence System that scrapes security data from public APIs and displays the information in interactive dashboards.
                            The poller was written in python and runs on a daily cron job to fetch new information, and the information is dumped into Elasticsearch and visualized in Kibana. 
                            I was able to cut down the algorithm runtime by over 95% over the course of the summer from several hours to a few minutes.
                        </p>
                        <p className="footnote">
                            *Unfortunately due to the confidential nature of this project I cannot share explicit photos, videos, or source code at this time. 
                            For further details, please contact me directly.
                        </p>
                    </div>
                </div> 
            );
        }
        return null;
    }

    renderBPMHelper() {
        if (this.state.filters["Work"]) {
            return (
                <div id="BPMHelper" className="stack_desc work">
                    <div className="projectDate">
                        <u><b>September 2019 - January 2020</b></u>
                    </div>
                    <div className="left_stack inner">
                        <div style={{ width: '50%', margin: '0 auto' }}>
                            <div style={{ height: '50%'}}>
                                <img src={PythonLogo} className="colImg" alt="Python Logo" />
                            </div>
                            <div style={{ height: '50%'}}>
                                <img src={PuppeteerLogo} className="colImg" alt="Puppeteer Logo" />
                            </div>
                        </div>
                    </div>
                    <div className="right_desc inner">
                        <u><b>Legacy Systems Navigator & Helper</b></u>
                        <p>
                            During my spare time as a Shift Manager for RSA Security, I created a program in Tkinter that helped navigate our legacy systems using webscraping and various external python modules. 
                            Once the implementation was sold to our site, it effectively automated an entire role and was incorporated in the training for that role.
                        </p>
                        <p className="footnote">
                            *Unfortunately due to the confidential nature of this project I cannot share explicit photos, videos, or source code at this time. 
                            For further details, please contact me directly.
                        </p>
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