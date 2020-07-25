import React from "react";
import "./App.css";
import Homepage from "./Homepage";
import Forms from "./components/forms";
import About from "./about";
import Contact from "./contact";
import { Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route exact path="/Homepage.js" component={Homepage} />
      <Route exact path="/about.js" component={About} />
      <Route exact path="/contact.js" component={Contact} />
    </div>
  );
}
export default App;
