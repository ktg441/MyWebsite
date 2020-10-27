import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

import Logo from "../media/Logo.png";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

/*
Component that contains a navbar for site navigation
*/
class CustomNavbar extends Component {

    constructor() {
        super();
        this.state = {};
    }

    /* When the component loads... */
    componentDidMount() {

    }

    render() {
        return (
            <div id="navWrapper" className="siteHidden">
                    <Navbar collapseOnSelect expand='md' bg="info" fixed="top" className="shadow rounded-pill-bottom">
                        <Navbar.Brand href="#about-me">
                            <img src={Logo} width="60" height="60" alt="" className="d-inline-block align-center" />{' '}
                            Kiran Thomas Payne
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="collapsingNavbar" />
                        <Navbar.Collapse id="siteNavbar">
                            <Nav className="mr-auto">
                                <Nav.Link href="#about-me" className="text-dark" >About Me</Nav.Link>
                                <Nav.Link href="#resume" className="text-dark" >Resume</Nav.Link>
                                <Nav.Link href="#projects" className="text-dark" >Projects</Nav.Link>
                                <Nav.Link href="#contact" className="text-dark" >Contact</Nav.Link>
                            </Nav>
                            <Nav>
                                <Nav.Link href="https://www.linkedin.com/in/kiran-payne/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></Nav.Link>
                                <Nav.Link href="https://github.com/ktg441" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></Nav.Link>
                                <Nav.Link href="mailto:kiran.t.payne@gmail.com, payne77@purdue.edu" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faEnvelope} /></Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
            </div>
        );
    }

}

export default CustomNavbar;