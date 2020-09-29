import React, { Component } from 'react';

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
            </div>    
        );
    }

}

export default Contact;