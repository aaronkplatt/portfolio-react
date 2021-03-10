import React from "react";
import 'materialize-css';
import "./style/Home.css"

function Home() {
  return (
    <div>
      <div>
        <h1>I'm Aaron Platt.</h1>
      </div>
      <div className="row">
        <p className="col s4 offset-s4">
          I'm a San Diego based Web Developer. Currently a motivated web development student at UCSD. Experienced with project management, strong team skills, creative designing, and excellent written and verbal communication. I'm currently looking for a full-time job in San Diego, CA.
        </p>
      </div>
      <div className="row">
        {/* left side RESUME*/}
        <div className="col s6">
          <button>RESUME NEED TO MAKE DOWNLOADABLE LINK</button>
        </div>
        {/* Right side PROFILE PIC*/}
        <div className="col s6">
          <img src="..." alt="Profile Pic"></img>
        </div>

        
      </div>
    </div>
  );
}

export default Home;
