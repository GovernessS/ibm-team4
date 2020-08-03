import React, { Component } from "react";
import "./index.css";
import TherapistData from "./therapists.json";
import axios from "axios";

class TestResult extends Component {
  state = {
    title: "",
    description: "",
    therapists: [],
  };

  componentDidMount = () => {
    this.getDatabase();
  };

  getDatabase = () => {
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://powerful-shelf-81198.herokuapp.com/Resources"
      )
      .then((response) => {
        const data = response.data;
        this.setState({ therapists: data });
        console.log("Data has been received!");
      })
      .catch(() => {
        alert("Error retrieving data!");
      });
  };

  displayDatabase = (therapists) => {
    if (!therapists.length) return null;

    return therapists.map((therapists, index) => (
      <div key={index}>
        <h1 className="us">
          {therapists.last_name}, {therapists.first_name}
        </h1>
        <h3 className="contactBody">{therapists.specialty_1}</h3>
      </div>
    ));
  };
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
        <div className="database">
          {this.displayDatabase(this.state.therapists)}
        </div>
      </div>
    );
  }
}

export default TestResult;
