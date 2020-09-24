import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

import Logo from "../media/Logo.png";

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
                <Navbar collapseOnSelect fixed="top" bg="#000000" expand="lg">
                    <Navbar.Brand href="#home">
                        <img src={Logo} width="60" height="60" alt="" className="d-inline-block align-top" />{' '}
                        Kiran Thomas Payne
                    </Navbar.Brand>
                    <Nav>
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Navbar>
            </Container>
        );
    }

}

export default CustomNavbar;