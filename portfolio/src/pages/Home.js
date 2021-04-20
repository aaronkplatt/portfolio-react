import React from "react";
import 'materialize-css';
import "./style/Home.css";
import profilePic from "../pages/images/ProfilePic.jpg";
import resume from './documents/Aaron_Platt_Final_RESUME.pdf';


function Home() {
  return (
    <div className="container-fluid">
        <h1 className="name">I'm Aaron Platt.</h1>
      <div className='row'>
        <div className="col s3 offset-s1 cards">
          {/* SKILLS */}
          <h3 className="cardHead">Skills</h3>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript/jQuery</li>
            <li>Bootstrap/Materialize</li>
            <li>ReactJS</li>
            <li>NodeJS</li>
            <li>Ajax</li>
            <li>SQL</li>
            <li>MongoDB</li>
            <li>IndexedDB</li>
            <li>MomentJS</li>
            <li>VueJS</li>
            <li>Express Web Server</li>
            <li>Google Sheets</li>
        </div>
        {/* HEADER */}
        <div className='col s4'>
        {/* PROFILE PIC */}
          <img src={profilePic} alt="Profile Pic" className="profilePic"></img> 
          <h3 className="links">Links</h3>
        </div>

        {/* ABOUT ME */}
        <div className="col s3 cards">
          <h3 className="cardHead">About Me</h3>
          <p className="bio">
            Logical and results-driven Web Developer dedicated to building and optimizing user-focused websites for customers with various business objectives. Judicious and creative when crafting effective websites, apps and platforms to propel competitive advantage and revenue growth. Technically proficient and analytical problem solver with calm and focused demeanor.
          </p>
        </div>
      </div>
      <div className="row">
        <a className="personalLink" href={resume}>RESUME</a>
        <a className="personalLink" href="https://www.linkedin.com/in/aaron-platt-90808116a/">LINKEDIN</a>
        <a className="personalLink" href="https://github.com/aaronkplatt">GITHUB</a>
      </div>
    </div>
  );
}

export default Home;
