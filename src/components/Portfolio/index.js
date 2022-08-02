import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import pwaEditor from '../../assets/images/pwaEditor.jpg';
import socialAPI from '../../assets/images/socialAPI.jpg';
import eCommerceORM from '../../assets/images/eCommerceORM.jpg';
import mySQLtracker from '../../assets/images/mysqltracker.jpg';
import proREADMEgen from '../../assets/images/proREADMEgen.jpg';
import workdaysch from '../../assets/images/workdaysch.jpg';

function Portfolio() {
  return (
    <section>
      <div class="card">
        <img class="card-img-top" src={pwaEditor} alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">PWA Text Editor</h5>
          <p class="card-text">Node.js, npm (incl. concurrently, code-mirror-names, express, idb, nodemon, and webpack), Heroku, JS</p>
        </div>
        <div class="card-body">
          <a href="https://github.com/matthewestes33/pwaEditor" class="card-link">GitHub</a>
          <a href="https://limitless-sands-85113.herokuapp.com/" class="card-link">Deployed App</a>
        </div>
      </div>

      <div class="card">
        <img class="card-img-top" src={socialAPI} alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">Social Network API</h5>
          <p class="card-text">Node.js, MongoDB, npm (incl. express, mongoose, nodemon), Insomnia, JS</p>
        </div>
        <div class="card-body">
          <a href="https://github.com/matthewestes33/socialAPI" class="card-link">GitHub</a>
          <a href="https://drive.google.com/file/d/15Y4lnXbImT862QSMjPp7MPagv6Vd3EZb/view" class="card-link">Deployed App</a>
        </div>
      </div>

      <div class="card">
        <img class="card-img-top" src={eCommerceORM} alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">E-Commerce Back End</h5>
          <p class="card-text">Node.js, mySQL, npm (incl. dotenv, express, mySQL2, nodemon, sequelize), Insomnia, JS</p>
        </div>
        <div class="card-body">
          <a href="https://github.com/matthewestes33/eCommerceORM" class="card-link">GitHub</a>
          <a href="https://drive.google.com/file/d/1dgeEctAwvZIyMaRlEDfm3I6jnO8kIaOX/view" class="card-link">Deployed App</a>
        </div>
      </div>

      <div class="card">
        <img class="card-img-top" src={mySQLtracker} alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">MySQL Employee Tracker</h5>
          <p class="card-text">Node.js, mySQL, npm (incl. inquirer, mySQL2, console table), JS</p>
        </div>
        <div class="card-body">
          <a href="https://github.com/matthewestes33/mysqlemployeetracker" class="card-link">GitHub</a>
          <a href="https://drive.google.com/file/d/1Ie_PSlHF2iVTjlILPOiY5SURn6iLRtJY/view" class="card-link">Deployed App</a>
        </div>
      </div>

      <div class="card">
        <img class="card-img-top" src={proREADMEgen} alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">Professional README Generator</h5>
          <p class="card-text">Node.js, npm (incl. inquirer and fs), JS</p>
        </div>
        <div class="card-body">
          <a href="https://github.com/matthewestes33/proREADMEgen" class="card-link">GitHub</a>
          <a href="https://drive.google.com/file/d/1aepxNWQrccQFMerNRW-A6hMBVGZ0L27V/view" class="card-link">Deployed App</a>
        </div>
      </div>

      <div class="card">
        <img class="card-img-top" src={workdaysch} alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">8-to-5 Work Day Scheduler</h5>
          <p class="card-text">jQuery, third-party APIs, JavaScript, CSS, HTML</p>
        </div>
        <div class="card-body">
          <a href="https://github.com/matthewestes33/homework-5" class="card-link">GitHub</a>
          <a href="https://matthewestes33.github.io/homework-5/" class="card-link">Deployed App</a>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;