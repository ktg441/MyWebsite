import React, { Component } from 'react';

import { Icon, InlineIcon } from '@iconify/react';
import unityIcon from '@iconify/icons-logos/unity';
import firebaseIcon from '@iconify/icons-logos/firebase';
import virtualReality from '@iconify/icons-mdi/virtual-reality';
import augmentedReality from '@iconify/icons-mdi/augmented-reality';


import Purdue from "../media/Purdue_Boilermakers_Logo.svg";
import PurdueCS from "../media/Purdue_CS_Logo.svg";
import CDesign from "../media/CDesign_Logo.svg";
import Ecolab from "../media/EcolabLogo.svg";
import RSA from "../media/RSALogo.svg";

/*
Component about my experience
*/
class Resume extends Component {

    constructor() {
        super();
        this.state = {};
    }

    /* When the component loads... */
    componentDidMount() {

    }

    render() {
        return (
            <div id="resume" className="siteHidden">
                <div className="sectionHeader">Education</div>
                <div id="education" className="section">
                    <div id="schoolPic" className="picDiv">
                        <img src={Purdue} width="220" height="220" alt="Purdue Logo" className="d-inline-block align-center roundedLogo leftShadow" />
                    </div>
                    <div id="schoolDesc" className="descDiv">
                        <ul className="list-unstyled">
                            <li><u>Bachelor of Science at Purdue University</u></li>
                            <ul className="text-muted subList">
                                <li>Major: Computer Science</li>
                                <li>Minor: Entrepreneurship & Innovation</li>
                                <li>GPA: 3.41/4.00</li>
                                <li>Expected Graduation: December 2020</li>
                            </ul>
                        </ul>
                    </div>
                </div>
                <div className="sectionHeader">Work Experience</div>
                <div id="workExperience">
                    <div className="section">
                        <div id="cDesc" className="descDiv">
                            <ul className="list-unstyled">
                                <li><u>Software Developer/Research Assistant</u></li>
                                <li className = "descSub"><i>February 2020 - Present</i></li>
                                <ul className="text-muted subList descSub">
                                    <li>Lead programmer for 6 person research team</li>
                                    <li>Created and modernized aspects of an AR-IoT System used for research projects</li>
                                    <li>Helped conduct research and user studies of mentioned system</li>
                                    <li>Submitted manuscripts to ACM CHI 2021 (Conference on Human-Factors in Computer Systems) and ACM CSCW 2021 (Conference on Computer-Supported Cooperative Work and Social Computing)</li>
                                </ul>
                            </ul>
                        </div>
                        <div id="cPic" className="picDiv">
                            <img src={CDesign} width="220" height="220" alt="Convergence Design Lab Logo" className="d-inline-block align-center roundedLogo rightShadow" />
                        </div>
                    </div>
                    <div className="section">
                        <div id="ecoDesc" className="descDiv">
                            <ul className="list-unstyled">
                                <li><u>IT Intern</u></li>
                                <li className = "descSub"><i>June 2020 - August 2020</i></li>
                                <ul className="text-muted subList  descSub">
                                    <li>Created a foundational Threat Intelligence System that collects critical security data from various APIs</li>
                                    <li>Visualized ingested data to create consolidated Intelligence Dashboards for InfoSec team</li>
                                    <li>Began migration of all extraneous security data into one cental location to be incorporated in above system</li>
                                    <li>Orchestrated and executed the company’s first hackathon for 20+ interns over 2 days</li>
                                </ul>
                            </ul>
                        </div>
                        <div id="ecoPic" className="picDiv">
                            <img src={Ecolab} width="220" height="220" alt="Ecolab Logo" className="d-inline-block align-center roundedLogo rightShadow" />
                        </div>
                    </div>
                    <div className="section">
                        <div id="rsaDesc" className="descDiv">
                            <ul className="list-unstyled">
                                <li><u>Shift Manager/Senior Fraud Analyst</u></li>
                                <li className = "descSub"><i>January 2018 - February 2020</i></li>
                                <ul className="text-muted subList descSub">
                                    <li>Managed corporate inbox and phone number as a 24/7 point of contact for 100+ financial institutions around the world</li>
                                    <li>Created a tool that automated an entire role at our site</li>
                                    <li>Redesigned the website that our site used for QA</li>
                                    <li>Detected, analyzed, and shutdown fraudulent internet activity (Phishing, malware, brand abuse, trojans, etc.)</li>
                                </ul>
                            </ul>
                        </div>
                        <div id="rsaPic" className="picDiv">
                            <img src={RSA} width="220" height="220" alt="RSA Logo" className="d-inline-block align-center roundedLogo rightShadow" />
                        </div>
                    </div>
                    <div className="section">
                        <div id="taDesc" className="descDiv">
                            <ul className="list-unstyled">
                                <li><u>Undergraduate Teaching Assistant</u></li>
                                <li className = "descSub"><i>Spring 2020: Systems Programming</i></li>
                                <ul className="text-muted subList descSub">
                                    <li>Assisted in a lab section of 30+ students teaching topics related to shell programming and memory optimization</li>
                                    <li>Helped shift course resources and lab materials online in response to the COVID-19 pandemic</li>
                                </ul>
                                <li className = "descSub"><i>Summer 2019: Object-Oriented Programming & Problem Solving in Java</i></li>
                                <ul className="text-muted subList descSub">
                                    <li>Taught foundational programming skills and standards to lab section of 20+ novice CS students</li>
                                    <li>Held regular office hours 3+ times a week to assist students with concepts and homework</li>
                                </ul>
                            </ul>
                        </div>
                        <div id="taPic" className="picDiv">
                            <img src={PurdueCS} width="220" height="220" alt="Purdue CS Logo" className="d-inline-block align-center roundedLogo rightShadow" />
                        </div>
                    </div>
                </div>
                <div className="sectionHeader">Skills</div>
                    <div className="skillBox">
                        <div className="skill">
                            <i className="devicon-java-plain-wordmark colored"></i>
                        </div>
                        <div className="skill">
                            <i className="devicon-csharp-plain colored"></i>
                        </div>
                        <div className="skill">
                            <i className="devicon-python-plain-wordmark colored"></i>
                        </div>
                        <div className="skill">
                            <i className="devicon-c-plain colored"></i>
                        </div>
                        <div className="skill">
                            <i className="devicon-cplusplus-plain colored"></i>
                        </div>
                    </div>
                    <div className="skillBox">
                        <div className="skill">
                            <i className="devicon-javascript-plain colored"></i>
                        </div>
                        <div className="skill">
                            <i className="devicon-html5-plain-wordmark colored"></i>
                        </div>
                        <div className="skill">
                            <i className="devicon-css3-plain-wordmark colored"></i>
                        </div>
                        <div className="skill">
                            <i className="devicon-react-original-wordmark colored"></i>
                        </div>
                        <div className="skill">
                            <i className="devicon-github-plain-wordmark colored"></i>
                        </div>
                    </div>
                    <div className="skillBox">
                        <div className="skill">
                            <Icon icon={virtualReality} valign="center" />
                        </div>
                        <div className="skill">
                            <Icon icon={augmentedReality} valign="center" />
                        </div>
                        <div className="skill">
                            <Icon icon={unityIcon} valign="center" />
                        </div>
                        <div className="skill">
                            <Icon icon={firebaseIcon} valign="center" />
                        </div>
                        <div className="skill">
                            <i className="devicon-mysql-plain-wordmark colored"></i>
                        </div>
                    </div>
                <div className="sectionHeader"><button className="btn btn-info btn-lg">Resume (PDF)</button></div>
            </div>
        );
    }

}

export default Resume;