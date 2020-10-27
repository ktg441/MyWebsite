import React, { Component } from 'react';
import MediaQuery from 'react-responsive';

import PDF from '../documents/Kiran_Payne_Resume.pdf';
import DOCX from '../documents/Kiran_Payne_ResumeWord.docx';

/*
Component that gives download links to my resume
*/
class Downloads extends Component {

    constructor() {
        super();
        this.state = {};
    }

    /* When the component loads.. */
    componentDidMount() {
    }

    render() {
        return (
            <div id="docContainer">
                <MediaQuery minDeviceWidth={768}>
                    <div className="downloadButton">
                        <button className="btn btn-info btn-lg"><a className="whiteLink" href={PDF} target="_blank" rel="noopener noreferrer">Resume (PDF)</a></button>
                    </div>
                    <div className="downloadButton">
                        <button className="btn btn-info btn-lg"><a className="whiteLink" href={DOCX} target="_blank" rel="noopener noreferrer">Resume (Word Doc)</a></button>
                    </div>
                </MediaQuery>
                <MediaQuery maxDeviceWidth={767}>
                    <div className="downloadButton">
                        <button className="btn btn-info btn-lg"><a className="whiteLinkMobile" href={PDF} target="_blank" rel="noopener noreferrer">Resume (PDF)</a></button>
                    </div>
                    <div className="downloadButton">
                        <button className="btn btn-info btn-lg"><a className="whiteLinkMobile" href={DOCX} target="_blank" rel="noopener noreferrer">Resume (Word Doc)</a></button>
                    </div>
                </MediaQuery>
            </div>
        );
    }

}

export default Downloads;