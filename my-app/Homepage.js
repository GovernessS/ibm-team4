import React from "react";
import "./index.css";

function Homepage() {
  return (
    <div>
      <title>Black Mental Health</title>
      <header className="Text">
        <h2>
          <a className="Form-font Site-name" href="homepage.js">
            Black Mental Health
          </a>
        </h2>
        <a className="Link" href="contact.js">
          Contact Us
        </a>
        <a className="Link" href="about.js">
          About
        </a>
      </header>
      <div className="Text welcome">
        <div className="welcome-text">
          <h2>
            Welcome to our website!
            <br />
            [Placeholder for Welcome Message]
          </h2>
        </div>
      </div>
      <br />
      <div className="Text">
        <p>
          <em>
            What would you like help with today? [Placeholder for Bubble
            Component]
          </em>
        </p>
      </div>
      <div className="Text">
        <p>
          Please Enter Your Name Here:
          <input type="form" />
        </p>
        <br />
      </div>
      <div margin-bottom="20px">
        <button className="submit" type="submit">
          Submit
        </button>
      </div>
    </div>
  );
}
export default Homepage;
