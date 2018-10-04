import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Blog from "./components/pages/blog";
import Contact from "./components/pages/Contact";
import Learn from "./components/pages/Learn";
// import formInstance from "./components/pages/formInstance";

const App = () => (
  <Router>
    <div>
      <NavTabs />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/blog" component={Blog} />
      <Route path="/contact" component={Contact} />
      <Route path="/learn" component={Learn} />
    </div>
  </Router>
);

export default App;
