import React from "react";
import 'materialize-css';
import "./style/Home.css"

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
          I'm a San Diego based Web Developer. Currently a motivated web development student at UCSD. Experienced with project management, strong team skills, creative designing, and excellent written and verbal communication. I'm currently looking for a full-time job in San Diego, CA.
        </p>
      </div>
      {/* RESUME LINKs */}
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
            <li>REACTJS</li>
            <li>NODEJS</li>
            <li>MYSQL</li>
            <li>MONGODB</li>
            <li>NODEJS</li>
            <li>FULLSTACK</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
