import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import About from "../About";
import Contact from "../Contact";
import Home from "../Home";
import NotFound from "../NotFound";

import { Layout } from "../../components";

const Routes = () => (
  <Router>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </Router>
);

export default Routes;
