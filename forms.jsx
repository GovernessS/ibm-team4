import React, { Component } from "react";
import "./forms.css";

class Forms extends Component {
  state = {
    name: "",
  };
  render() {
    return (
      <div className="Text">
        <p>
          Please Enter Your Name Here:
          <input type="form" />
        </p>
        <br />
      </div>
    );
  }
}

export default Forms;
