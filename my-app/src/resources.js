import React, { Component } from "react";
import "./index.css";
import TherapistData from "./therapists.json";
import axios from "axios";

class Resources extends Component {
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
        <article className="myDoctor">
          <h1 className="us">
            {therapists.last_name}, {therapists.first_name}
          </h1>
          <p className="organization">
            Organization: {therapists.organization}
          </p>
          <p className="specialty">
            Specialty: {therapists.specialty_1}, {therapists.specialty_2}
          </p>
          <p className="citydoc">City:{therapists.city}</p>
          <p className="statedoc">State:{therapists.state}</p>
          <p className="telecom">Telecom:{therapists.telecom}</p>
          <p className="prices">
            Price Range: ${therapists.min_cost} - ${therapists.max_cost}
          </p>
          <hr className="aboutBody" />
        </article>
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
          <a className="Link" href="resources.js">
            Resources
          </a>
        </header>
        <div className="database">
          {this.displayDatabase(this.state.therapists)}
        </div>
      </div>
    );
  }
}

export default Resources;
