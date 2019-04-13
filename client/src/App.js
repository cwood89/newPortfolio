import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom"
import Panel from "./components/panel";
import Nav from "./components/nav";

class App extends Component {
  componentDidMount() {
    var src = ["/assets/js/jquery.min.js",
      "/assets/js/jquery.scrollex.min.js",
      "/assets/js/jquery.scrolly.min.js",
      "/assets/js/browser.min.js",
      "/assets/js/breakpoints.min.js",
      "/assets/js/util.js",
      "/assets/js/main.js"
    ]
    for (let i = 0; i < src.length; i++) {
      var script = document.createElement("script");
      script.src = src[i];
      script.async = false;

      document.body.appendChild(script)
    }
  }
  render() {
    return (
      <Router>
        <Nav />
        <div id="main">
          < Panel />
        </div>
      </Router>
    )
  }
}
export default App;


