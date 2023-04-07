import React, { Component } from "react";
import "./headsection.css";

// Images import
import hero1 from "../images/desktop-image-hero-1.jpg";
import hero2 from "../images/desktop-image-hero-2.jpg";
import hero3 from "../images/desktop-image-hero-3.jpg";

export default class HeadSection extends Component {
  state = {
    currentSlide: 1
  };

  prevSlide = () => {
    const { currentSlide } = this.state;
    if (currentSlide === 1) {
      this.setState({ currentSlide: 3 });
    } else {
      this.setState({ currentSlide: currentSlide - 1 });
    }
  };

  nextSlide = () => {
    const { currentSlide } = this.state;
    if (currentSlide === 3) {
      this.setState({ currentSlide: 1 });
    } else {
      this.setState({ currentSlide: currentSlide + 1 });
    }
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { currentSlide } = this.state;

    return (
      <div className="head-container">
        {currentSlide === 1 && (
          <div className="row Slides">
            <img src={hero1} alt="hero-1" />
            <div className="column-txt-block">
              <h2>Discover innovative ways to decorate</h2>
              <p>
                We provide unmatched quality, comfort, and style for property
                owners across the country. Our experts combine form and function
                in bringing your vision to life. Create a room in your own style
                with our collection and make your property a reflection of you
                and what you love.
              </p>
              <a href="/shop" className="primary-btn">
                Shop now
              </a>
              <div className="slide-btns">
                <button onClick={this.prevSlide}>Prev</button>
                <button onClick={this.nextSlide}>Next</button>
              </div>
            </div>
          </div>
        )}
        {currentSlide === 2 && (
          <div className="row Slides">
            <img src={hero2} alt="hero-2" />
            <div className="column-txt-block">
              <h2>We are available all across the globe</h2>
              <p>
                With stores all over the world, it's easy for you to find
                furniture for your home or place of business. Locally, we’re in
                most major cities throughout the country. Find the branch
                nearest you using our store locator. Any questions? Don't
                hesitate to contact us today.
              </p>
              <a href="/shop" className="primary-btn">
                Shop now
              </a>
              <div className="slide-btns">
                <button onClick={this.prevSlide}>Prev</button>
                <button onClick={this.nextSlide}>Next</button>
              </div>
            </div>
          </div>
        )}
        {currentSlide === 3 && (
          <div className="row Slides">
            <img src={hero3} alt="hero-3" />
            <div className="column-txt-block">
              <h2>Manufactured with the best materials</h2>
              <p>
                Our modern furniture store provide a high level of quality. Our
                company has invested in advanced technology to ensure that every
                product is made as perfect and as consistent as possible. With
                three decades of experience in this industry, we understand what
                customers want for their home and office.
              </p>
              <a href="/shop" className="primary-btn">
                Shop now
              </a>
              <div className="slide-btns">
                <button onClick={this.prevSlide}>Prev</button>
                <button onClick={this.nextSlide}>Next</button>
              </div>
            </div>
          </div>
        )}
        {/* test */}
      </div>
    );
  }
}
