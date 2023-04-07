import React, { Component } from "react";
import dark from "../images/image-about-dark.jpg";
import light from "../images/image-about-light.jpg";
import "./row_under_container.css";

export default class row_under_container extends Component {
  render() {
    return (
      <>
        <div class="row under-container">
          <img src={dark} height="280" alt="" />
          <div class="column-txt-block">
            <h2>About our furniture</h2>
            <p>
              Our multifunctional collection blends design and function to suit
              your individual taste. Make each room unique, or pick a cohesive
              theme that best express your interests and what inspires you. Find
              the furniture pieces you need, from traditional to contemporary
              styles or anything in between. Product specialists are available
              to help you create your dream space.
            </p>
          </div>
          <img src={light} height="280" alt="" />
        </div>
      </>
    );
  }
}
