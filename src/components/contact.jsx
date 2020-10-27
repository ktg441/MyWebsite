import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

/*
Component about where to contact me
*/
class Contact extends Component {

    constructor() {
        super();
        this.state = {};
    }

    /* When the component loads... */
    componentDidMount() {

    }

    render() {
        return (
            <div id="contact" className="siteHidden">
                <div id="contactHeader"><u>Contact Me</u></div>
                <div id="githubDiv" className="contactPane">
                    <div class="text-center card-box">
                        <div class="member-card pt-2 pb-2">
                            <div class="thumb-lg member-thumb mx-auto"><img src="https://avatars3.githubusercontent.com/u/47010494?s=460&u=750b9d3009fa7a9be67721740da4983a0aabb9da&v=4" class="rounded-circle img-thumbnail" alt="Profile Pic from Github" /></div>
                            <div class="">
                                <h4>Kiran Payne</h4>
                                <p class="text-muted">@Developer <span>| </span><span><a href="https://ktg441.github.io/" target="_blank" rel="noopener noreferrer" class="text-pink">ktg441.github.io</a></span></p>
                            </div>
                            <ul class="social-links list-inline">
                                <li class="list-inline-item"><a href="https://www.linkedin.com/in/kiran-payne/" target="_blank" rel="noopener noreferrer" title="" data-placement="top" data-toggle="tooltip" class="tooltips" data-original-title="LinkedIn"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                                <li class="list-inline-item"><a href="https://github.com/ktg441" target="_blank" rel="noopener noreferrer" title="" data-placement="top" data-toggle="tooltip" class="tooltips" data-original-title="Github"><FontAwesomeIcon icon={faGithub} /></a></li>
                                <li class="list-inline-item"><a href="mailto:kiran.t.payne@gmail.com, payne77@purdue.edu" target="_blank" rel="noopener noreferrer" title="" data-placement="top" data-toggle="tooltip" class="tooltips" data-original-title="Email"><FontAwesomeIcon icon={faEnvelope} /></a></li>
                            </ul>
                            Senior CS Student with a passion for application development.
                        </div>
                    </div>
                </div>
            </div>    
        );
    }

}

export default Contact;