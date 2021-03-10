import React from "react";
import 'materialize-css';
import './style/About.css'

function About() {
  return (
    <div>
      {/* ABOUT ME */}
      <div className="row">
        <h1>About Me</h1>
        <p className="col s4 offset-s4">
          I'm currently a vidiogropher for professional skateboarding but am looking at getting into the front end and/or back end of web development. My favorite feeling is when a problem gets fixed which took effort and time to fix.
        </p>
      </div>
      <div className="row">
        {/* EDUCATION */}
        <div className="col s3 offset-s1">
            <h4>EDUCATION</h4>
          <div className="row">
            <p>University High School</p>
            <p>Highschool Deploma • June 2018</p>
            <p>I took two computer science classes in highschool adn since then I was hooked. NEED MORE</p>
          </div>
          <div className="row">
            <p>UCSD Bootcamp</p>
            <p>Web Development • December 2020</p>
            <p>Learned how to code back end and front end applications with several other usefull tools. NEED MORE</p>
          </div>
        </div>
        {/* CONTACT */}
        <div className="col s4">
          <h4>CONTACT DETAILS</h4>
          <p>Aaron Platt</p>
          <p>3365 Rollsreach Dr.</p>
          <p>San Diego California, 92111</p>
          <p>858-752-7917</p>
          <p>aaron.k.platt@gmail.com</p>
        </div>
        {/* WORK */}
        <div className="col s3">
          <h4>WORK</h4>
          <div className="row">
            <p>Woodward West</p>
            <p>Assistant Skateboard Director • June 2018 - December 2019</p>
            <p>Took leadership for campers and workers directing them what to do. Orginized events for the campers and dealt with camper problems. Delt with parents that had questions about the camp and/or their child.</p>
          </div>
          <div className="row">
            <p>Pacific Event Productions</p>
            <p>Stage Hand • October 2018 - April 2020</p>
            <p>A physical labor job to set up stages, lighting and catering for big events. Needed to take leadership at points depending the job. Worked in a wearhouse shipping things in trucks.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
