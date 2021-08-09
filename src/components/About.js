import React,{Component} from 'react';

export default class About extends Component {
    render() {
      
      return (
        <section id="about">
           <h1>About Me</h1>
           <div className="about-sec">
  
           
            <img className="profile-pic"  src="images/profile.jpg" alt="" />
            <h2>Me
            <p>I am a fullstack web-developer located in Austin, Texas. I am proficient in the MERN stack and more. I have extensive experience managing people and working in fast-paced, high pressure enviornments. In my spare time I enjoy pursuing my musical interests and spending time with family and friends.</p>
            </h2>
            <h2>Contact Details
            <p className="contact-li">
               <li>
               Email: chrisdonovan311@gmail.com</li>
               
               <li>Phone: 512-738-9145 </li>            
               
               <li>Github: https://github.com/chdonovan
               </li>
            </p>
            </h2>
            </div>
                    
         </section>
      );
    }
  }