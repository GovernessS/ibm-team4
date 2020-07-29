

import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Button, ButtonGroup } from 'reactstrap';
import {Checkbox, Radio} from 'react-btn-checkbox';
import ReactWidgetsForm from './ReactWidgetsForm'

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { reducer as formReducer } from 'redux-form';


import { BrowserRouter, Route, Link } from "react-router-dom";


class Index extends React.Component {
  render() {
    return (

      <div>
      <title>Black Mental Health</title>
      <header className="Title_b">
        <h1 className="Form-font Site-name"> Black Mental Health</h1>
        <a className="Link" href="contact.js">
          Contact Us
        </a>

        <a className="Link" href="about.js">
          About
        </a>
      </header>
      <div className="Text welcome">
        <div className="welcome-text">
          <h1>
            Welcome to our website!
            </h1>
            <h2 id="texto">
            We are here to assist you
            </h2>


        </div>
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
};
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
  document.getElementById('root')
);














// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
