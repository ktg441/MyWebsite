import React, { Component } from 'react';

import Purdue from "../media/Purdue_Boilermakers_logo.svg";

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
                <div id="education">
                    <div id="schoolPic">
                        <img src={Purdue} width="220" height="220" alt="Purdue Logo" className="d-inline-block align-center roundedLogo" />
                    </div>
                    <div id="schoolDesc">
                        <ul>
                            <li>Hello</li>
                            <li>Point 2</li>
                        </ul>
                    </div>
                </div>
                <div className="sectionHeader">Work Experience</div>
                <div id="resumeTemp">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus purus ipsum, lacinia quis lobortis at, ultrices nec nisi. Donec ac quam at enim malesuada blandit. Aliquam pharetra aliquet dui bibendum consequat. Donec vulputate, arcu quis sodales dignissim, risus nisl volutpat leo, non lobortis purus ex nec dolor. Integer porta eget metus id viverra. Etiam arcu tellus, rutrum et dui non, pulvinar consectetur elit. Cras eu purus aliquam, pellentesque libero quis, tristique purus. Morbi fermentum massa eget mi luctus feugiat. Sed blandit ante massa, volutpat efficitur metus ultricies vel. Vivamus quis feugiat enim.</p>
                    <p>Sed pellentesque lectus est, nec iaculis enim tristique a. Duis suscipit neque tristique, porttitor odio at, suscipit risus. Vestibulum aliquam libero in augue accumsan vulputate. Vestibulum a augue ante. Ut tincidunt vulputate lectus sit amet pulvinar. In pharetra ac libero sed euismod. Quisque pharetra, leo quis cursus pellentesque, diam lorem convallis ligula, malesuada varius arcu augue eget enim. Mauris at sagittis eros. Morbi blandit lorem eget mi eleifend, eu ornare velit convallis. Phasellus quis lacus tortor.</p>
                    <p>Cras convallis lectus non enim sagittis dictum a id urna. Vestibulum nec vulputate nibh, at posuere tortor. Nunc a risus odio. Sed in erat justo. In laoreet justo non ante hendrerit, sit amet consectetur lacus bibendum. Nam dictum blandit nisi, et tempus nibh iaculis vel. Aenean ut bibendum eros. Sed ut mi imperdiet mauris tristique luctus. Duis augue magna, convallis in sapien et, placerat porta magna. Ut vehicula bibendum diam a fringilla.</p>
                    <p>Nunc nec tincidunt dolor. Etiam sed aliquet lacus. Aliquam quis ex nec lectus imperdiet iaculis. Etiam pellentesque tortor id lorem fermentum varius. Mauris sed accumsan elit, suscipit iaculis ipsum. Fusce elementum turpis vitae lectus varius molestie. Aenean feugiat at sem luctus posuere. Aenean maximus enim quis vulputate varius. Nullam eleifend quam in ex lobortis, eget venenatis tortor volutpat. Nulla in lectus eu eros maximus ultricies. Vivamus sit amet turpis quis tellus lacinia vestibulum. Aliquam vitae leo risus. Sed sed nisi rutrum, feugiat turpis sit amet, mollis sem.</p>
                    <p>Suspendisse consectetur cursus metus, eu scelerisque quam malesuada sagittis. Aliquam erat volutpat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque mi nisi, ultrices at nulla in, cursus tincidunt urna. Fusce ultricies odio sem, id rhoncus leo pharetra quis. Mauris ut condimentum turpis. Duis congue nulla a nibh iaculis, nec rutrum diam convallis. Maecenas pellentesque posuere sapien, quis venenatis sapien sodales et. Donec hendrerit neque quis nibh consequat, vel mollis neque congue. Ut accumsan augue nec neque semper, et maximus nisi vehicula. Integer luctus nulla ac lectus tincidunt aliquam. Vivamus sagittis lorem fermentum neque accumsan imperdiet. Cras at sodales est, ut ultrices tellus. Pellentesque at diam nulla. Integer vulputate consequat hendrerit.</p>
                </div>
                <div className="sectionHeader">Skills</div>
                <button>Resume (PDF)</button>
            </div>
        );
    }

}

export default Resume;