import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Button, ButtonGroup } from "reactstrap";
import { Checkbox, Radio } from "react-btn-checkbox";
import ReactWidgetsForm from "./ReactWidgetsForm";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import { reducer as formReducer } from "redux-form";
import { BrowserRouter, Route, Link } from "react-router-dom";

class Index extends React.Component {
  render() {
    return (
      <div>
        <title>Black Help </title>
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
        <div className="Text welcome">
          <div className="welcome-text">
            <h1>Welcome to Black Help!</h1>
            <h2>We are here to assist you. </h2>
          </div>
        </div>
        <br />
        <div>
          <p className="mainBody">
            We offer both online and in-person resources to help members of the
            Black community deal with any mental-health related issues. Fill out
            the form below to get started!
          </p>
          <br />
        </div>
        <div className="Text">
          <p>
            <div>
              <ReactWidgetsForm />
            </div>
          </p>
        </div>
      </div>
    );
  }
}
export default Index;

const rootReducer = combineReducers({
  form: formReducer,
});

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
