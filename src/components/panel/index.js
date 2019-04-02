import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Nav from "../nav";
import About from "../about";
import Portfolio from "../portfolio";
import Contact from "../contact";
import Home from "../home";
// hav state that renders each age pased on tab


class Panel extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </div>
    )
  }
}
export default Panel;