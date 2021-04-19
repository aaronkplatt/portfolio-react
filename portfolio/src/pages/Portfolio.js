import React from "react";
import 'materialize-css';
import './style/Portfolio.css';
// Images
import Budget from "./images/budget.PNG";
import Burger from "./images/burger.PNG";
import CobraArcade from "./images/cobraArcade.PNG";
import Tracker from "./images/employeeTracker.PNG";
import LocalCoffeeShop from "./images/LocalCoffeeShop.PNG"
import Nomad from "./images/Nomad.PNG";
import Surf from "./images/surf.PNG";
import Team from "./images/TeamProfile.PNG"

function Portfolio() {
  return (
    <div className="content">
      {/* Header */}
      <div className="row">
        <h1>Portfolio</h1>
      </div>

      {/* ROW OF first 4 CARDs*/}
      <div className="row">

        {/* LOCAL COFFEE SHOP LOCATOR card 1*/}
        <div className="col s3">
          <div className="card">
            <h4 className="card-title">Local Coffee Shop Locator</h4>
            <div className="card-image">
              <img  className="images" src={LocalCoffeeShop} alt="project"/>
            </div>
            <div className="card-content">
              <p>Generate locations of nearby local coffee shops and the current weather conditions for the city. Because we are displaying local coffee shops we must exclude bug brand coffee shops like starbucks.</p>
              <hr></hr>
              <p>Tools/Languages: HTML5, CSS, Javascript, Bootstrap</p>
            </div>
            <div className="card-action">
              <a href="https://aaronkplatt.github.io/localCoffeeShops.github.io/" className="links">Deployed</a>
              <hr />
              <a href="https://github.com/aaronkplatt/localCoffeeShops.github.io" className="links">Repository</a>
            </div>
          </div>
        </div>

        {/* COBRA ARCADE CARD 2*/}
        <div className="col s3">
          <div className="card">
            <h4 className="card-title">Cobra Arcade</h4>
            <div className="card-image">
              <img className="images" src={CobraArcade} alt="project"/>
            </div>
            <div className="card-content">
              <p>Enjoy a nostalgic trip down game history to play classic titles such as Snake, Flappy Bird, and Pong. User data is saved for highscores for each game.</p>
              <hr></hr>
              <p>Tools/Languages: Sequelize, Node.JS, Express, Express Handlebars, Express Sessions, Canvas, Iframe</p>
            </div>
            <div className="card-action">
              <a href="https://cobra-arcade.herokuapp.com/" className="links">Deployed</a>
              <hr />
              <a href="https://github.com/aaronkplatt/project-2.github.io" className="links">Repository</a>
            </div>
          </div>
        </div>

        {/* EAT-DA-Burger CARD 3 */}
        <div className="col s3">
          <div className="card">
            <h4 className="card-title">EAT-DA-BURGER</h4>
            <div className="card-image">
              <img  className="images" src={Burger} alt="project"/>
            </div>
            <div className="card-content">
              <p>This program uses MySql Database to create burgers. It allows you to devour the burger by clicking th edvour button, after its saved into the devour table. 
              </p>
              <hr />
              <p>Tools/Languages: HTML5, CSS, Javascript, MySQL, Express.js, Express Handlebars</p>
            </div>
            <div className="card-action">
              <a href="https://aqueous-lowlands-03560.herokuapp.com/" className="links">Deployed</a>
              <hr />
              <a href="https://github.com/aaronkplatt/aaronkplatt-eat-da-burger.github.io" className="links">Repository</a>
            </div>
          </div>
        </div>

        {/* Offline/ online budget tracker CARD 4 */}
        <div className="col s3">
          <div className="card">
            <h4 className="card-title">OFFLINE/ONLINE BUDGET TRACKER</h4>
            <div className="card-image">
              <img  className="images" src={Budget} alt="project"/>
            </div>
            <div className="card-content">
              <p>As an avid traveller I want to be able to track my withdrawals and deposits with or without a data/internet connection so that my account balance is accurate when I am traveling.</p>
              <hr />
              <p>Tools/Languages: React, IndexedDB, CSS, Express.js, MongoDB</p>
            </div>
            <div className="card-action">
              <a href="https://secret-mesa-51518.herokuapp.com/" className="links">Deployed</a>
              <hr />
              <a href="https://github.com/aaronkplatt/aaronkplatt-OnlineOfflineBudgetTrackers.github.io" className="links">Repository</a>
            </div>
          </div>
        </div>
        
        {/* ROW 2 */}
        <div className="row">

          {/* NOMAD WILDERNESS CARD 5 */}
          <div className="col s3">
            <div className="card">
              <h4 className="card-title">NOMAD WILDERNESS</h4>
              <div className="card-image">
                <img  className="images" src={Nomad} alt="project"/>
              </div>
              <div className="card-content">
                <p>Nomad will assist users in finding edible plants, nearby animals and provide several survival guides.</p>
                <hr />
                <p>Tools/Languages: ReactJS, Node and Express Web Server, MongoDB, Mongoose ORM, GoogleMaps API, Auth0, React Materialize CSS, Passport, Axios</p>
              </div>
              <div className="card-action">
                <a href="https://wilderness-survival-app.herokuapp.com/" className="links">Deployed</a>
                <hr />
                <a href="https://github.com/Rogers-Development-Services/Wilderness-Survival-App" className="links">Repository</a>
              </div>
            </div>
          </div>

          {/* EMPLOYEE TRACKER Card 6 */}
          <div className="col s3">
            <div className="card">
              <h4 className="card-title">EMPLOYEE TRACKER</h4>
              <div className="card-image">
                <img className="images" src={Tracker} alt="project"/>
              </div>
              <div className="card-content">
                <p>As a buisness owner I want to be able to view and manage the Departments, roles, Managers and employees in my company so that I can organize, view, and plan buisness accordingly.</p>
                <hr />
                <p>Tools/Languages: MySQL, Express, Inquirer, Javascript, Console Table</p>
              </div>
              <div className="card-action">
                <a href="https://drive.google.com/file/d/1ppeBnbjkY_epYlC1hB-2iYA-XoQIO2-Z/view" className="links">Demonstration</a>
                <hr />
                <a href="https://github.com/aaronkplatt/aaronkplatt-employee-tracker.github.io" className="links">Repository</a>
              </div>
            </div>
          </div>

          {/* Team profile generator CARD 7 */}
          <div className="col s3">
            <div className="card">
              <h4 className="card-title">TEAM PROFILE GENORATOR</h4>
              <div className="card-image">
                <img className="images" src={Team} alt="project"/>
              </div>
              <div className="card-content">
                <p>This project asks the user to enter information about each Employee and creates an HTML file in the folder "output" for the team putting each employee on its own card and displaying their info.</p>
                <hr />
                <p>Tools/Languages: Html5, Inquirer, Javascript</p>
              </div>
              <div className="card-action">
                <a href="https://drive.google.com/file/d/1PDKzvC07KJxXtkX728syMr-CCYOq4Ht0/view" className="links">Demonstration</a>
                <hr />
                <a href="https://github.com/aaronkplatt/aaronkplatt-TeamProfileGenerator.github.io" className="links">Repository</a>
              </div>
            </div>
          </div>

          {/* SUNSHINE SURFCLUB CARD 8 */}
          <div className="col s3">
            <div className="card">
              <h4 className="card-title">SUNSHINE SURFCLUB</h4>
              <div className="card-image">
                <img  className="images" src={Surf} alt="project"/>
              </div>
              <div className="card-content">
                <p>This single page application allows people to sign up for the Sunshine Surf Club. All of the form responses are saved onto a private Google Sheets for the client to pull data from.</p>
                <hr />
                <p>Tools/Languages: HTML5, Javascript, CSS, Google Sheets</p>
              </div>
              <div className="card-action">
                <a href="http://www.sunshine-surfclub.com/" className="links">Deployed</a>
                <hr />
                <a href="https://github.com/aaronkplatt/sunshineSurfClub.github.io" className="links">Repository</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
  );
}

export default Portfolio;
