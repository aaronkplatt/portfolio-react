import React from "react";
import 'materialize-css';
import './style/Portfolio.css';

function Portfolio() {
  return (
    <div>
      {/* Header */}
      <div className="row">
        <h1>Portfolio</h1>
      </div>

      {/* ROW OF first 4 CARDs*/}
      <div className="row">
        {/* CARD 1 */}
        <div className="col s3">
          <div className="card">
            <h4 className="card-title">Project 1</h4>
            <div className="card-image">
              <img src="..." alt="project"/>
            </div>
            <div className="card-content">
              <p>I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively.</p>
            </div>
            <div className="card-action">
              <a href="#" className="links">Deployed</a>
              <hr />
              <a href="#" className="links">Repository</a>
            </div>
          </div>
        </div>
        {/* Card 2 */}
        <div className="col s3">
          <div className="card">
            <h4 className="card-title">Project 2</h4>
            <div className="card-image">
              <img src="..." alt="project"/>
            </div>
            <div className="card-content">
              <p>I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively.</p>
            </div>
            <div className="card-action">
              <a href="#" className="links">Deployed</a>
              <hr />
              <a href="#" className="links">Repository</a>
            </div>
          </div>
        </div>
        {/* CARD 3 */}
        <div className="col s3">
          <div className="card">
            <h4 className="card-title">Project 3</h4>
            <div className="card-image">
              <img src="..." alt="project"/>
            </div>
            <div className="card-content">
              <p>I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively.</p>
            </div>
            <div className="card-action">
              <a href="#" className="links">Deployed</a>
              <hr />
              <a href="#" className="links">Repository</a>
            </div>
          </div>
        </div>
        {/* CARD 4 */}
        <div className="col s3">
          <div className="card">
            <h4 className="card-title">Project 4</h4>
            <div className="card-image">
              <img src="..." alt="project"/>
            </div>
            <div className="card-content">
              <p>I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively.</p>
            </div>
            <div className="card-action">
              <a href="#" className="links">Deployed</a>
              <hr />
              <a href="#" className="links">Repository</a>
            </div>
          </div>
        </div>
        
        {/* ROW 2 */}
        <div className="row">
          {/* CARD 5 */}
          <div className="col s3">
            <div className="card">
              <h4 className="card-title">Project 5</h4>
              <div className="card-image">
                <img src="..." alt="project"/>
              </div>
              <div className="card-content">
                <p>I am a very simple card. I am good at containing small bits of information.
                I am convenient because I require little markup to use effectively.</p>
              </div>
              <div className="card-action">
                <a href="#" className="links">Deployed</a>
                <hr />
                <a href="#" className="links">Repository</a>
              </div>
            </div>
          </div>
          {/* Card 6 */}
          <div className="col s3">
            <div className="card">
              <h4 className="card-title">Project 6</h4>
              <div className="card-image">
                <img src="..." alt="project"/>
              </div>
              <div className="card-content">
                <p>I am a very simple card. I am good at containing small bits of information.
                I am convenient because I require little markup to use effectively.</p>
              </div>
              <div className="card-action">
                <a href="#" className="links">Deployed</a>
                <hr />
                <a href="#" className="links">Repository</a>
              </div>
            </div>
          </div>
          {/* CARD 7 */}
          <div className="col s3">
            <div className="card">
              <h4 className="card-title">Project 7</h4>
              <div className="card-image">
                <img src="..." alt="project"/>
              </div>
              <div className="card-content">
                <p>I am a very simple card. I am good at containing small bits of information.
                I am convenient because I require little markup to use effectively.</p>
              </div>
              <div className="card-action">
                <a href="#" className="links">Deployed</a>
                <hr />
                <a href="#" className="links">Repository</a>
              </div>
            </div>
          </div>
          {/* CARD 8 */}
          <div className="col s3">
            <div className="card">
              <h4 className="card-title">Project 8</h4>
              <div className="card-image">
                <img src="..." alt="project"/>
              </div>
              <div className="card-content">
                <p>I am a very simple card. I am good at containing small bits of information.
                I am convenient because I require little markup to use effectively.</p>
              </div>
              <div className="card-action">
                <a href="#" className="links">Deployed</a>
                <hr />
                <a href="#" className="links">Repository</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
