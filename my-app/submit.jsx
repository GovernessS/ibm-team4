import React, { Component } from "react";
import "./submit.css";

class Submit extends Component {
  state = {
    name: "",
  };
  render() {
    return (
      <div className="Text">
        <button className="submit" type="submit">
          Submit
        </button>
      </div>
    );
  }
}

export default Submit;
