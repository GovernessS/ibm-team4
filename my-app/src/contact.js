import React, { Component } from "react";
import "./index.css";

class Contact extends Component {
  render() {
    return (
      <div>
        <title>Black Mental Health</title>
        <header className="Text">
          <h2>
            <a className="Form-font Site-name" href="index.js">
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
        <body>
          <br />
          <div>
            <p className="us">Contact Us!</p>
            <br />
            <p className="about">
              Your Name:
              <br />
              <input type="name"></input>
            </p>
            <p className="about">
              Email (optional):
              <br />
              <input type="message"></input>
            </p>
            <p className="about">
              Please Enter Your Message Here:
              <br />
              <textarea type="message"></textarea>
            </p>

          </div>

          <div>
          <center>
          <button className="ContactButton" type="submit">
            Send
          </button>
          </center>
          </div>
        </body>
      </div>
    );
  }
}

export default Contact;
