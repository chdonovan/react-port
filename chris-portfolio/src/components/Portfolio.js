import React, { Component } from 'react';
export default class Porfolio extends Component {
    render() {
        return(
            <section id="portfolio">
            <div className="row">
                
                <h1>Check Out Some of My Work!</h1>
                
                
                </div>
                <div className="works-cards">
                    <div className="card">
                        <h4>KnowGO</h4>
                        <a href ="https://chrisdocs.github.io/KnowGo/"
                        target="_blank"><img className="workspic" src="images/knowgo.png"></img></a>
                        
                    </div>
                    <div className="card">
                        <h4>The Collectors Vault</h4>
                        <a href ="https://the-collectors-vault.herokuapp.com/" target="_blank"
                        ><img className="workspic" src="images/collect.png"></img></a>
                        
                    </div>
                    <div className="card">
                        <h4>README generator</h4>
                        <a href ="https://github.com/chdonovan/readme-gen" target="_blank"
                        ><img className="workspic" src="images/readmescrn.png"></img></a>
                        
                    </div>
                    <div className="card">
                        <h4>Social API</h4>
                        <a href ="https://github.com/chdonovan/socialapi" target="_blank"
                        ><img className="workspic" src="images/reactiondelete.gif"></img></a>
                        
                    </div>
                    <div className="card">
                        <h4>Budget Tracker</h4>
                        <a href ="https://budget--chdonovan.herokuapp.com/" target="_blank">
                            <img className="workspic" src="images/budget-scrn.png"></img></a>
                        
                    </div>
                    <div className="card">
                        
                        <h4>Team-Profile-Generator</h4>
                        <a href ="https://github.com/chdonovan/Team-Profile-Generator" target="_blank">
                            <img className="workspic" src="images/team-Screenshot.png"></img>
                            </a>
                        
                    </div>
                </div>
                
            
            </section>
        );

    }
}