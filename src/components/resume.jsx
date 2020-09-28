import React, { Component } from 'react';

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
                                <ul className="text-muted subList">
                                    <li>Major: Computer Science</li>
                                    <li>Minor: Entrepreneurship & Innovation</li>
                                    <li>GPA: 3.41/4.00</li>
                                    <li>Expected Graduation: December 2020</li>
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
                                <ul className="text-muted subList">
                                    <li>Major: Computer Science</li>
                                    <li>Minor: Entrepreneurship & Innovation</li>
                                    <li>GPA: 3.41/4.00</li>
                                    <li>Expected Graduation: December 2020</li>
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
                                <ul className="text-muted subList">
                                    <li>Major: Computer Science</li>
                                    <li>Minor: Entrepreneurship & Innovation</li>
                                    <li>GPA: 3.41/4.00</li>
                                    <li>Expected Graduation: December 2020</li>
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
                                <ul className="text-muted subList">
                                    <li>Major: Computer Science</li>
                                    <li>Minor: Entrepreneurship & Innovation</li>
                                    <li>GPA: 3.41/4.00</li>
                                    <li>Expected Graduation: December 2020</li>
                                </ul>
                            </ul>
                        </div>
                        <div id="taPic" className="picDiv">
                            <img src={PurdueCS} width="220" height="220" alt="Purdue CS Logo" className="d-inline-block align-center roundedLogo rightShadow" />
                        </div>
                    </div>
                </div>
                <div className="sectionHeader">Skills</div>
                <div className="sectionHeader"><button className="btn btn-info btn-lg">Resume (PDF)</button></div>
            </div>
        );
    }

}

export default Resume;