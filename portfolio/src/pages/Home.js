import React from "react";
import 'materialize-css';
import "./style/Home.css";


function Home() {
  return (
    <div>
      {/* HEADER */}
      <div>
        <h1>I'm Aaron Platt.</h1>
      </div>

      {/* PROFILE PIC */}
      <div className="row">
        <img src="..." alt="Profile Pic" className="col s4 offset-s4"></img> 
      </div>

      {/* ABOUT ME */}
      <div className="row">
        <p className="col s4 offset-s4">
          Logical and results-driven Web Developer dedicated to building and optimizing user-focused websites for customers with various business objectives. Judicious and creative when crafting effective websites, apps and platforms to propel competitive advantage and revenue growth. Technically proficient and analytical problem solver with calm and focused demeanor.
        </p>
      </div>

      {/* RESUME LINK */}
      <div className="row">
        <div className="col s4 offset-s4">
          <a className="personalLink" href="https://drive.google.com/file/d/1DEONHnCfec0uyCn1ZC9pRInYITlsTfqk/view?usp=sharing">RESUME</a>
          <hr />
          <a className="personalLink" href="https://github.com/aaronkplatt">GITHUB</a>
          <hr />
          <a className="personalLink" href="https://www.linkedin.com/in/aaron-platt-90808116a/">LINKEDIN</a>
        </div>
      </div>

      {/* SKILLS */}
      <div className="row">
        <div className="col s4 offset-s4">
          <h4>SKILLS</h4>
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
      </div>
    </div>
  );
}

export default Home;
