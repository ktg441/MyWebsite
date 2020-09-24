import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

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

    /* When the component loads, toggle intro on */
    componentDidMount() {

    }

    render() {
        return (
            <Container fluid>
                <Navbar collapseOnSelect fixed="top">
                    <Navbar.Brand href="#about-me">
                        <img src={Logo} width="60" height="60" alt="" className="d-inline-block align-center" />{' '}
                        Kiran Thomas Payne
                    </Navbar.Brand>
                    {'|'}
                    <Nav className="mr-auto">
                        <Nav.Link href="#about-me">About Me</Nav.Link>
                        <Nav.Link href="#resume">Resume</Nav.Link>
                        <Nav.Link href="#projects">Projects</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="https://www.linkedin.com/in/kiran-payne/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></Nav.Link>
                        <Nav.Link href="https://github.com/ktg441" target="_blank"><FontAwesomeIcon icon={faGithub} /></Nav.Link>
                        <Nav.Link href="mailto:kiran.t.payne@gmail.com, payne77@purdue.edu" target="_blank"><FontAwesomeIcon icon={faEnvelope} /></Nav.Link>
                    </Nav>
                </Navbar>
            </Container>
        );
    }

}

export default CustomNavbar;