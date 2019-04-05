import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav id="nav">
      <ul class="links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Me</Link></li>
        <li><Link to="/portfolio">My Work</Link></li>
        <li><Link to="/contact">Contact Me</Link></li>
      </ul>
      <ul class="icons">
        <li><a href="https://www.linkedin.com/in/cwood89/" class="icon fa-linkedin"><span class="label">LinkedIn</span></a></li>
        <li><a href="https://github.com/cwood89" class="icon fa-github"><span class="label">GitHub</span></a></li>
      </ul>
    </nav>
  )
}
export default Nav;