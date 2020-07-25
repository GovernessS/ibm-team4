import React from "react";
import "./Homepage.css";

function Homepage() {
  return (
    <div>
      <title>Black Mental Health</title>
      <header className="Text">
        <h1 className="Form-font Site-name"> Black Mental Health</h1>
        <a className="Link" href="contact.html">
          Contact Us
        </a>
        <a className="Link" href="about.html">
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
      <div className="Text">
        <p>
          <em>
            What would you like help with today? [Placeholder for Bubble
            Component]
          </em>
        </p>
      </div>
      <p className="Text">
        Please enter your name here:
        <br />
        <input type="form" />
      </p>
      <button className="submit" type="submit">
        Submit
      </button>
    </div>
  );
}
export default Homepage;
