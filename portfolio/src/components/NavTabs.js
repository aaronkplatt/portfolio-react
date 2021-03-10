import React from "react";
import 'materialize-css';
import "./style/NavTabs.css";

function NavTabs() {
  return ( 
    <nav>
      <div className="nav-wrapper">
        <a href="./Home" className="brand-logo right">Aaron Platt</a>
        {/* <ul id="nav-mobile" className="left hide-on-med-and-down"></ul> */}
        <ul id="nav-mobile" className="left hide-on-med-and-down">
          <li><a href="./Portfolio">Portfolio</a></li>
          <li><a href="./About">About Me</a></li>
          <li><a href="./Contact">Contact</a></li>
        </ul>
      </div>
  </nav>
  );
}

export default NavTabs;
