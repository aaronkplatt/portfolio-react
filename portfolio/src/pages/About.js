import React from "react";
import 'materialize-css';
import './style/About.css';
import resume from './documents/Aaron_Platt_Final_RESUME.pdf';

function About() {
  return (
    <div className="content">

      <h1 className='title'>About Me</h1>
      {/* ABOUT ME */}
      <div className="row">
        <div className='contactCard col s6 offset-s3'>
          <h3 className='title'>CONTACT DETAILS</h3>
          <p>Aaron Platt</p>
          <p>3365 Rollsreach Dr.</p>
          <p>San Diego California, 92111</p>
          <p>858-752-7917</p>
          <p>aaron.k.platt@gmail.com</p>
        </div>
      </div>
        {/* RESUME LINKs */}
      <div className='row padding'>
          <a className="myLink" href={resume}>RESUME</a>
          <a className="myLink" href="https://www.linkedin.com/in/aaron-platt-90808116a/">LINKEDIN</a>
          <a className="myLink" href="https://github.com/aaronkplatt">GITHUB</a>

      </div>
      <div className="row">
        {/* education */}
        <div className='educationCard col s6 offset-s3'>
        <h3 className='title'>EDUCATION</h3>
          <div className="row">
            <p className='title'>University High School</p>
            <p>Highschool Deploma • June 2018</p>
            <p>I took two computer science classes in highschool adn since then I was hooked. NEED MORE</p>
          </div>
          <hr />
          <div className="row">
            <p className='title'>UCSD Bootcamp</p>
            <p>Web Development • December 2020</p>
            <p>Learned how to code back end and front end applications with several other usefull tools. NEED MORE</p>
          </div>
        </div>
      </div>
      <div className="row">
        {/* work */}
        <div className="aboutCard col s6 offset-s3">
          <h3 className='title'>WORK</h3>
          <div className="row">
            <p className='title'>Woodward West</p>
            <p>Assistant Skateboard Director • June 2018 - December 2019</p>
            <p>Took leadership for campers and workers directing them what to do. Orginized events for the campers and dealt with camper problems. Delt with parents that had questions about the camp and/or their child.</p>
          </div>
          <hr />
          <div className="row">
            <p className='title'>Pacific Event Productions</p>
            <p>Stage Hand • October 2018 - April 2020</p>
            <p>A physical labor job to set up stages, lighting and catering for big events. Needed to take leadership at points depending the job. Worked in a wearhouse shipping things in trucks.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
