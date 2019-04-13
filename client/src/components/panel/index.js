import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import About from "../about";
import Portfolio from "../portfolio";
import Contact from "../contact";
import Home from "../home";


class Panel extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    )
  }
}
export default Panel;