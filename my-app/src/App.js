import React from 'react';
import logo from './logo.svg';
import './App.css';
import Index from './index'
import About from "./about";
import Contact from "./contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//import { BrowserRouter as Router, Switch, Route } from "react-route-dom";

function App() {
  return (
    <div className="App">
    <Route exact path="/" component={Index} />
    <Route exact path="/index.js" component={Index} />
    <Route exact path="/about.js" component={About} />
    <Route exact path="/contact.js" component={Contact} />
    </div>
  );
}

export default App;
