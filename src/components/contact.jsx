import React, { Component } from 'react';

import '@rocktimsaikia/github-card';
import { Card } from 'react-bootstrap';
import { Icon } from '@iconify/react';
import emailIcon from '@iconify/icons-fxemoji/email';


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
                <div id="contactRow">
                    <div id="linkedinDiv" className="contactPane">
                        <div className="LI-profile-badge"  data-version="v1" data-size="large" data-locale="en_US" data-type="vertical" data-theme="light" data-vanity="kiran-payne"><a className="LI-simple-link" target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/kiran-payne?trk=profile-badge'>Kiran Payne</a></div>
                    </div>
                    <div id="githubDiv" className="contactPane">
                        <github-card data-user="ktg441"></github-card>
                    </div>
                    <div id="emailDiv" className="contactPane">
                        <Card className="emailCard">
                            <Icon className="bigMail" icon={emailIcon} />
                            <Card.Body>
                                <Card.Title>Click a link below to Email me!</Card.Title>
                                <Card.Text>
                                    <a href="mailto:kiran.t.payne@gmail.com" target="_blank" rel="noopener noreferrer">Personal Email</a>
                                </Card.Text>
                                <Card.Text>
                                    <a href="mailto:payne77@purdue.edu" target="_blank" rel="noopener noreferrer">School Email</a>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>    
        );
    }

}

export default Contact;