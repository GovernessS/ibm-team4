import React, { Component } from "react";
import "./index.css";

class Contact extends Component {
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
        </header>
        <body>
          <br />
          <div>
            <h2 className="us"> Contact Us!</h2>
            <br />
            <p className="contactBody">
              Your Name*:
              <br />
              <input className="name" type="name"></input>
            </p>
            <p className="contactBody">
              Email* :
              <br />
              <input className="name" type="email"></input>
            </p>
            <p className="contactBody">
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
