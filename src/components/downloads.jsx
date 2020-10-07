import React, { Component } from 'react';

import PDF from '../documents/Resume.pdf';
import DOCX from '../documents/ResumeWord.docx';

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
                <div className="downloadButton">
                    <button className="btn btn-info btn-lg"><a className="whiteLink" href={PDF} target="_blank" rel="noopener noreferrer">Resume (PDF)</a></button>
                </div>
                <div className="downloadButton">
                    <button className="btn btn-info btn-lg"><a className="whiteLink" href={DOCX} target="_blank" rel="noopener noreferrer">Resume (Word Doc)</a></button>
                </div>
            </div>
        );
    }

}

export default Downloads;