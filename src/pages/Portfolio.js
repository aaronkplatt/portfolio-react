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
      <h1 className="title">Portfolio</h1>

      {/* ROW one*/}
      <div className='row'>
         {/* NOMAD WILDERNESS CARD 5 */}
         <div className="col s4">
          <div className="card">
            <h4 className="card-title">NOMAD WILDERNESS</h4>
            <div className="card-image">
              <img  className="images" src={Nomad} alt="project"/>
            </div>
            <div className="card-content">
              <p>Nomad assists users in finding edible plants, nearby animals and provide several survival guides letting the user create and save notes.</p>
              <hr />
              <p><em>Tools/Languages:</em> ReactJS, Node and Express Web Server, MongoDB, Mongoose ORM, GoogleMaps API, Auth0, React Materialize CSS, Passport, Axios</p>
            </div>
            <div className="card-action">
              <a href="https://wilderness-survival-app.herokuapp.com/" className="links">Deployed</a>
              <hr />
              <a href="https://github.com/Rogers-Development-Services/Wilderness-Survival-App" className="links">Repository</a>
            </div>
          </div>
        </div>

        {/* LOCAL COFFEE SHOP LOCATOR card 1*/}
        <div className="col s4">
          <div className="card">
            <h4 className="card-title">COFFEE SHOP LOCATOR</h4>
            <div className="card-image">
              <img  className="images" src={LocalCoffeeShop} alt="project"/>
            </div>
            <div className="card-content">
              <p>Generate locations of nearby local coffee shops and the current weather conditions for the city. Because we are displaying local coffee shops we must exclude big brand coffee shops like Starbucks.</p>
              <hr></hr>
              <p><em>Tools/Languages:</em> HTML5, CSS, Javascript, Bootstrap</p>
            </div>
            <div className="card-action">
              <a href="https://aaronkplatt.github.io/localCoffeeShops.github.io/" className="links">Deployed</a>
              <hr />
              <a href="https://github.com/aaronkplatt/localCoffeeShops.github.io" className="links">Repository</a>
            </div>
          </div>
        </div>

        {/* COBRA ARCADE CARD 2*/}
        <div className="col s4">
          <div className="card">
            <h4 className="card-title">COBRA ARCADE</h4>
            <div className="card-image">
              <img className="images" src={CobraArcade} alt="project"/>
            </div>
            <div className="card-content">
              <p>Enjoy a nostalgic trip down game history to play classic titles such as Snake, Flappy Bird, and Pong. User data is saved for highscores for each game.</p>
              <hr></hr>
              <p><em>Tools/Languages:</em> Sequelize, Node.JS, Express, Express Handlebars, Express Sessions, Canvas, Iframe</p>
            </div>
            <div className="card-action">
              <a href="https://cobra-arcade.herokuapp.com/" className="links">Deployed</a>
              <hr />
              <a href="https://github.com/aaronkplatt/project-2.github.io" className="links">Repository</a>
            </div>
          </div>
        </div>

       
      {/* row end div */}
      </div>

      {/* ROW 2 */}
      <div className="row">
        {/* Offline/ online budget tracker CARD 4 */}
        <div className="col s4">
          <div className="card">
            <h4 className="card-title">OFFLINE/ONLINE BUDGET</h4>
            <div className="card-image">
              <img  className="images" src={Budget} alt="project"/>
            </div>
            <div className="card-content">
              <p>As an avid traveler I want to be able to track my withdrawals and deposits with or without a data/internet connection so that my account balance is accurate and up-to-date when I am traveling.</p>
              <hr />
              <p><em>Tools/Languages:</em> React, IndexedDB, CSS, Express.js, MongoDB</p>
            </div>
            <div className="card-action">
              <a href="https://secret-mesa-51518.herokuapp.com/" className="links">Deployed</a>
              <hr />
              <a href="https://github.com/aaronkplatt/aaronkplatt-OnlineOfflineBudgetTrackers.github.io" className="links">Repository</a>
            </div>
          </div>
        </div>
        
        {/* EAT-DA-Burger CARD 3 */}
        <div className="col s4">
          <div className="card">
            <h4 className="card-title">EAT-DA-BURGER</h4>
            <div className="card-image">
              <img  className="images" src={Burger} alt="project"/>
            </div>
            <div className="card-content">
              <p>This program uses MySql Database to create burgers. It allows you to devour the burger by clicking the devour button, after it's saved into the devour table. 
              </p>
              <hr />
              <p><em>Tools/Languages:</em> HTML5, CSS, Javascript, MySQL, Express.js, Express Handlebars</p>
            </div>
            <div className="card-action">
              <a href="https://aqueous-lowlands-03560.herokuapp.com/" className="links">Deployed</a>
              <hr />
              <a href="https://github.com/aaronkplatt/aaronkplatt-eat-da-burger.github.io" className="links">Repository</a>
            </div>
          </div>
        </div>

        {/* EMPLOYEE TRACKER Card 6 */}
        <div className="col s4">
          <div className="card">
            <h4 className="card-title">EMPLOYEE TRACKER</h4>
            <div className="card-image">
              <img className="images" src={Tracker} alt="project"/>
            </div>
            <div className="card-content">
              <p>As a business owner I want to be able to view and manage the Departments, Roles, Managers and Employees in the company so that I can organize, view, and plan business accordingly using MySQL.</p>
              <hr />
              <p><em>Tools/Languages:</em> MySQL, Express, Inquirer, Javascript, Console Table</p>
            </div>
            <div className="card-action">
              <a href="https://drive.google.com/file/d/1ppeBnbjkY_epYlC1hB-2iYA-XoQIO2-Z/view" className="links">Demonstration</a>
              <hr />
              <a href="https://github.com/aaronkplatt/aaronkplatt-employee-tracker.github.io" className="links">Repository</a>
            </div>
          </div>
        </div>
        </div>

      {/* row 3 */}
      <div className="row">

          {/* Team profile generator CARD 7 */}
          <div className="col s4">
            <div className="card">
              <h4 className="card-title">TEAM PROFILE GENERATOR</h4>
              <div className="card-image">
                <img className="images" src={Team} alt="project"/>
              </div>
              <div className="card-content">
                <p>This program asks the user to enter information about each employee.  It  generates an HTML file in the folder "output" creating a card for each employee with their information and details.</p>
                <hr />
                <p><em>Tools/Languages:</em> Html5, Inquirer, Javascript</p>
              </div>
              <div className="card-action">
                <a href="https://drive.google.com/file/d/1PDKzvC07KJxXtkX728syMr-CCYOq4Ht0/view" className="links">Demonstration</a>
                <hr />
                <a href="https://github.com/aaronkplatt/aaronkplatt-TeamProfileGenerator.github.io" className="links">Repository</a>
              </div>
            </div>
          </div>

          {/* SUNSHINE SURFCLUB CARD 8 */}
          <div className="col s4">
            <div className="card">
              <h4 className="card-title">SUNSHINE SURFCLUB</h4>
              <div className="card-image">
                <img  className="images" src={Surf} alt="project"/>
              </div>
              <div className="card-content">
                <p>This single page application allows people to sign up for the Sunshine Surfclub. All of the form responses are saved onto private Google Sheets for the client to pull data from allowing them to email the members.</p>
                <hr />
                <p><em>Tools/Languages:</em> HTML5, Javascript, CSS, Google Sheets</p>
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
  );
}

export default Portfolio;
