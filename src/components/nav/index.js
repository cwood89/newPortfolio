import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav id="nav">
      <ul class="links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About Me</a></li>
        <li><a href="/portfolio">My Work</a></li>
        <li><a href="/contact">Contact Me</a></li>

      </ul>
      <ul class="icons">
        <li><a href="#" class="icon fa-linkedin"><span class="label">LinkedIn</span></a></li>
        <li><a href="#" class="icon fa-github"><span class="label">GitHub</span></a></li>
      </ul>
    </nav>
  )
}
export default Nav;