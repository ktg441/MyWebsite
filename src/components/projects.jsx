import React, { Component } from 'react';

import ReactPlayer from "react-player";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';

import BoilermakeGameScreenshot1 from '../media/projects/BoilermakeGame.jpg';
import BoilermakeGameScreenshot2 from '../media/projects/BoilermakeGame2.jpg';

import AndroidLogo from '../media/projects/Android-Robot/Android-Robot-01.svg';
import ArduinoLogo from '../media/projects/Arduino/Arduino-01.svg';
import ElasticLogo from '../media/projects/Elastic/Elastic-01.svg';
import ElasticSearchLogo from '../media/projects/Elasticsearch/Elasticsearch-01.svg';
import BlocklyLogo from '../media/projects/Blockly/Blockly-01.svg';
import FirestoreLogo from '../media/projects/Firestore/Firestore-01.svg';
import GoogleCloudLogo from '../media/projects/Google-Cloud-Platform/Google-Cloud-Platform-01.svg';
import JavaLogo from '../media/projects/Java/Java-01.svg';
import JSLogo from '../media/projects/JavaScript/JavaScript-01.svg';
import KibanaLogo from '../media/projects/Kibana/Kibana-01.svg';
import PuppeteerLogo from '../media/projects/Puppeteer/Puppeteer-01.svg';
import PythonLogo from '../media/projects/Python/Python-01.svg';
import ReactLogo from '../media/projects/React/React-01.svg';
import TypeScriptLogo from '../media/projects/Typescript/Typescript-01.svg'
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
        this.renderThisWebsite = this.renderThisWebsite.bind(this);
        this.renderBoilermakeGame = this.renderBoilermakeGame.bind(this);
        this.renderBPMHelper = this.renderBPMHelper.bind(this);
        this.renderCookingGustavo = this.renderCookingGustavo.bind(this);
    }

    /* When the component loads... */
    async componentDidMount() {
        this.applyFilters();
    }

    /* Projects should load in order by date, regardless of filters applied */
    applyFilters() {
        let filteredProjects = [];

        filteredProjects.push(this.renderThisWebsite());
        filteredProjects.push(this.renderMP3164_1());
        filteredProjects.push(this.renderMP3164_2());
        filteredProjects.push(this.renderThreatIntel());
        filteredProjects.push(this.renderBoilermakeGame());
        filteredProjects.push(this.renderBPMHelper());
        filteredProjects.push(this.renderCookingGustavo());

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

    renderThisWebsite() {
        if (this.state.filters["Web"]) {
            return (
                <div id="ThisSite" className="stack_desc web">
                    <div className="projectDate">
                        <u><b>May 2020 - October 2020</b></u>
                    </div>
                    <div className="left_stack inner">
                        <div style={{ width: '50%', margin: '0 auto' }}>
                            <div style={{ height: '50%'}}>
                                <img src={ReactLogo} className="colImg" alt="React Logo" />
                            </div>
                            <div style={{ height: '50%'}}>
                                <img src={TypeScriptLogo} className="colImg" alt="TypeScript Logo" />
                            </div>
                        </div>
                    </div>
                    <div className="right_desc inner">
                        <u><b>My Personal Website</b></u>
                        <p>
                            Yes! This website was developed by me using my prior experience creatin with React. 
                            I created this website by myself using React and serves as a personal portfolio which I will continue to update as my life changes. 
                            Feel free to send feedback or any issues you see to me as I'm still working through various compatibility issues between various browsers and mobile resolutions. 
                        </p>
                    </div>
                </div>
            );
        }
        return null;
    }

    renderBoilermakeGame() {
        if (this.state.filters["Game"]) {
            return (
                <div id="BoilermakeGame" className="stack_desc game">
                    <div className="projectDate">
                        <u><b>January 2020</b></u>
                    </div>
                    <div className="left_stack inner">
                        <div style={{ display: 'inline-block', width: '50%'}}>
                            <div style={{ height: '50%'}}>
                                <img src={UnityEngineLogo} className="colImg" alt="Unity Engine Logo" />
                            </div>
                            <div style={{ height: '50%'}}>
                                <img src={BoilermakeGameScreenshot2} className="colImg" alt="Editor screenshot from the Keep Talking or Suffer a Windows Update game" />
                            </div>
                        </div>
                        <div style={{ display: 'inline-block', width: '50%'}}>
                            <div style={{ height: '50%'}}>
                                <img src={BoilermakeGameScreenshot1} className="colImg" alt="Screenshot from the Keep Talking or Suffer a Windows Update game" />
                            </div>
                            <div style={{ height: '50%'}}>
                                <img src={JavaLogo} className="colImg" alt="Java Logo" />
                            </div>
                        </div>
                    </div>
                    <div className="right_desc inner">
                        <u><b>Keep Talking or Suffer a Windows Update</b></u>
                        <p>
                            This project was created during a 36-hour hackathon project and completed with 1 other teammate. 
                            We created a co-operative Virtual Reality (VR) game that achieves communication between an Oculus Quest and a PC through Java sockets. 
                            The backend creates a randomly-generated timed puzzle for the two players to figure out based on visuals that each other are seeing in their respective clients. 
                            I handled the creation VR app and PC client in Unity as well as making the basic visuals and interactivity within our timeframe. 
                        </p>
                        <a className="whiteLink" href='https://github.com/ktg441/BoilermakeGame' target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} />Click here for the Github Repo</a>
                    </div>
                </div> 
            );
        }
        return null;
    }

    renderCookingGustavo() {
        if (this.state.filters["Game"]) {
            return (
                <div id="CookingGustavo" className="stack_desc game">
                    <div className="projectDate">
                        <u><b>September 2019 - October 2019</b></u>
                    </div>
                    <div className="left_stack">
                        <div style={{ margin: '5%' }}>
                            <div style={{ maxHeight: '70%'}}>
                                <ReactPlayer volume='0' muted='true' width='100%' height='100%' url="https://www.youtube.com/watch?v=sw_XTq0x9M4" />
                            </div>
                        </div>
                    </div>
                    <div className="right_desc inner">
                        <u><b>Cookin' Boiler</b></u>
                        <p>
                            This project was my first attempt at a full VR experience with a beginning and an ending. 
                            I created this game with 1 teammate over the course of 4 weeks where I focused on all of the VR integration, and my teammate focused on some custom 3D models. 
                            This game was created with Unity and was built for Oculus devices. 
                            If I had more time with the game, I would fix a lot of the 3D colliders (since there is a lot of clashing) and floating UI.
                        </p>
                        <a className="whiteLink" href='https://github.com/ktg441/Cookin-Boiler' target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} />Click here for the Github Repo</a>
                        <br></br>
                        <a className="whiteLink" href='https://www.youtube.com/watch?v=sw_XTq0x9M4' target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faYoutube} />Click here for the full Youtube video demo</a>
                    </div>
                </div> 
            );
        }
        return null;
    }

}

export default Projects;