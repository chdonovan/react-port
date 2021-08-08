import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    return (
      <section id="contact">
        <h1> contact me 
        
        </h1>
        <p>
              Feel free to contact me for any work or suggestions below
              </p>
        
          <div className="contact-sec">
          
              <form className="form">
                <label> Name:
                  <input type="text"></input>
                </label>
                <label>Email:
                  <input type="text"></input>
                
                </label>
                <label> Message:
                  <input type="text"></input>
                </label>
                <input type ="submit" value="Submit"></input> 
              </form>
          
              
            
          </div>
          
            
          
        </section>
        );
  }
}