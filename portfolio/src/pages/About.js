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
          <p>858-752-7917</p>
          <p>aaron.k.platt@gmail.com</p>
          <p>3365 Rollsreach Dr.</p>
          <p className="address">San Diego California, 92111</p>
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
            <p className='title'>UCSD Bootcamp</p>
            <p>Web Development • December 2020</p>
            <p className='text'>Learned front-end and back-end technologies through a dynamic curriculum, including HTML5, CSS3, JavaScript, jQuery, Express.js, React.js, Node.js, progressive web apps, agile methodology, computer science, database theory, MongoDB, MySQL, Git, and more.</p>
          </div>
          <hr />
          <div className="row">
            <p className='title'>University High School</p>
            <p>Highschool Deploma • June 2018</p>
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
            <p className='text'>Organized events, schedules for the campers and resolved camper problems. Worked with parents that had questions about camp and/or their child. Instructed skateboarding campers and focused on making their experience the best as possible pursing their love in skateboarding.</p>
          </div>
          <hr />
          <div className="row">
            <p className='title'>Pacific Event Productions</p>
            <p>Stage Hand • October 2018 - April 2020</p>
            <p className='text'>Worked in a team to construct and deconstruct public events. Set up stages, lighting and catering to provide the client with their needs. Loaded and unloaded trucks while fixing and organizing the products at the wearhouse.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
