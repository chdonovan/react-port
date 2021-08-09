import React ,{Component } from 'react';
export default class Resume extends Component {

    render (){
        return(
        
        <section>
            <h1 className="resume-t">Resume</h1>
            <div className="resume-form">
            <img className="resume-img" src ="images/resume.jpg"></img>
            {/* <a className="download" src="images/resume.png"download>
                <p>Download a copy!</p>
            </a> */}
            </div>
        </section>
        )}
}
