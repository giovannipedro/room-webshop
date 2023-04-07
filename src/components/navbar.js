import React, { Component } from "react";
import "./Navbar.css";
import logo from "../images/logo.svg";

export default class navbar extends Component {
  render() {
    return (
      <div>
        <nav class="navbar">
          <div class="container">
            <div class="logo">
              <img src={logo} alt="" />
            </div>
            <ul class="desk-links">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/shop">Shop</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </ul>
            <a href="javascript:void(0);" class="icon" onclick="myFunction()">
              <i class="fa fa-bars"></i>
            </a>
          </div>
          {/*  Navigation links (hidden by default) */}
          <div id="myLinks">
            <a href="#news">Home</a>
            <a href="#contact">Shop</a>
            <a href="#about">About</a>
          </div>
        </nav>
      </div>
    );
  }
}
