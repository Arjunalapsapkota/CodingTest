import "./main.css";
import React, { Component } from "react";
const image = require("../image/logo.png");

// since we are not maintaining any local state ,
// it can be a functional component :) but for now ;)
class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark ">
        <a className="navbar-brand" href="/">
          <img src={image} className="logo" alt="brand logo" />
        </a>
      </nav>
    );
  }
}

export default Navbar;
