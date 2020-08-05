import React, { Component } from "react";
import "./index.css";

class About extends Component {
  render() {
    return (
      <div>
        <title>Black Help</title>
        <header className="Text">
          <h2>
            <a className="Form-font Site-name" href="index.js">
              Black Help
            </a>
          </h2>
          <a className="Link" href="contact.js">
            Contact Us
          </a>
          <a className="Link" href="about.js">
            About
          </a>
          <a className="Link" href="resources.js">
            Resources
          </a>
        </header>
        <body>
          <br />
          <div>
            <h2 className="us">About Us</h2>

            <p className="aboutBody">
              Thanks for visiting Black Help! We are a group of programmers
              tasked to create a project to improve the well-being of Black folx
              in the current fragile climate.
              <br />
              <br />
              Our team is dedicated to destigmatizing mental health treatment
              within the Black community. Our hope is to provide both online and
              in-person assistance to those seeking mental-health related help.
            </p>

            <br />
          </div>
        </body>
      </div>
    );
  }
}

export default About;
