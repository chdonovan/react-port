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
                        <h4>KnowGo</h4>
                    </div>
                    <div className="card">
                        <h4>The Collectors Vault</h4>
                    </div>
                    <div className="card">
                        <h4>README generator</h4>
                    </div>
                    <div className="card">
                        <h4>Social API</h4>
                    </div>
                    <div className="card">
                        <h4>Budget Tracker</h4>
                    </div>
                    <div className="card">
                        <h4>Team-Profile-Generator</h4>
                        <img className="workspic" src="images/team-Screenshot.png"></img>
                    </div>
                </div>
                
            
            </section>
        );

    }
}