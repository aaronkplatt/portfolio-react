import React from "react";
import 'materialize-css';
import "./style/Home.css";
import profilePic from "../pages/images/ProfilePic.jpg";


function Home() {
  return (
    <div className='row'>
      <h1>I'm Aaron Platt</h1>
      <div className="col s4 card">
        {/* SKILLS */}
        <h3>SKILLS</h3>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript/jQuery</li>
              <li>Ajax</li>
              <li>Vue.js</li>
              <li>REACTJS</li>
              <li>NODEJS</li>
              <li>SQL</li>
              <li>MONGODB</li>
              <li>Express Web Server</li>
              <li>FULLSTACK</li>
            </ul>
      </div>
      {/* HEADER */}
      <div className='col s4'>
      {/* PROFILE PIC */}
        <img src={profilePic} alt="Profile Pic" className="profilePic"></img> 
      </div>

      {/* ABOUT ME */}
      <div className="col s4 card">
        <h3>About Me</h3>
        <p className="bio">
          Logical and results-driven Web Developer dedicated to building and optimizing user-focused websites for customers with various business objectives. Judicious and creative when crafting effective websites, apps and platforms to propel competitive advantage and revenue growth. Technically proficient and analytical problem solver with calm and focused demeanor.
        </p>
        <button className="personalLink" href="https://drive.google.com/file/d/1DEONHnCfec0uyCn1ZC9pRInYITlsTfqk/view?usp=sharing">RESUME</button>
          <button className="personalLink" href="https://github.com/aaronkplatt">GITHUB</button>
          <button className="personalLink" href="https://www.linkedin.com/in/aaron-platt-90808116a/">LINKEDIN</button>
      </div>
    </div>
  );
}

export default Home;
