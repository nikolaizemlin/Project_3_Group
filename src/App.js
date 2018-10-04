import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import History from "./components/pages/History";
import howtoo from "./components/pages/howtoo";
import Recipe from "./components/pages/Recipe";
// import formInstance from "./components/pages/formInstance";

const App = () => (
  <Router>
    <div>
      <NavTabs />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/History" component={History} />
      <Route path="/howtoo" component={howtoo} />
      <Route path="/Recipe" component={Recipe} />
    </div>
  </Router>
);

export default App;
