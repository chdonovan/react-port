import React, { Component } from 'react';
export default class Footer extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <footer>
          <div className="social-row">
          <div className="social-card">
        
            <a href ="https://github.com/chdonovan"
                target="_blank"><img className="socialpic" src="images/ghlogo.png"></img></a>
                <p>github</p>
                </div>
            
                <div className="social-card">
                
            <a href ="https://www.linkedin.com/in/chris-donovan-14462b208/"
                target="_blank"><img className="socialpic" src="images/linkdlogo.png"></img></a>
                <p>LinkedIn</p>
                </div>

                <div className="social-card">
                
            <a href ="https://twitter.com/Chrisdonovan311"
                target="_blank"><img className="socialpic" src="images/twitterlogo.png"></img></a>
                <p>twitter</p>
            </div>
            </div>
      
    </footer>
    );
  }
}