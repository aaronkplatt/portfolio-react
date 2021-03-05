import React from "react";
import { Link, useLocation } from "react-router-dom";
import 'materialize-css';
import { Navbar } from "react-materialize";


function NavTabs() {
// This allows the component to check the route any time the user uses a link to navigate.
  const location = useLocation();
  return ( 
    <nav>
        <div className="nav-wrapper">
            <a href="index.html" className="brand-logo">Aaron Platt</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a href="./About.js">About Me</a></li>
                <li><a href="./Portfolio.js">Portfolio</a></li>
                <li><a href="./Contact.js">Contact</a></li>
            </ul>
        </div>
    </nav>
  );
}

export default NavTabs;
