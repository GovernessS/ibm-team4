

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



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

ReactDOM.render(
  <h1>Black Mental Health</h1>,
  document.getElementById('root')
);

class QuoteMaker extends React.Component {
  render() {
    return (

      <div>
      <title>Black Mental Health</title>
      <header className="Title_b">
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
};

const rootReducer = combineReducers({
  form: formReducer,
});

const store = createStore(rootReducer);
ReactDOM.render(
  <Provider store={store}>
    <QuoteMaker />
  </Provider>,
  document.getElementById('root')
);















// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
