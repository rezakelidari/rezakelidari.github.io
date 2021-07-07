import React, { Component } from "react";
import "./Home.css"
import Button from "../Button/Button";

class Hero extends Component {
  state = {};
  render() {
    return (
      <div id="home" className="container page wrapper">
        <div className="left">
          <p className="subheading">Hi</p>
          <h1 className="heading">
            <span>I'm</span>
            <span>Reza</span>
            <span>Kelidari</span>
          </h1>
          <p className="subheading">
            I'm a intern Front-end developer. I've started my internship on{" "}
            <time dateTime="2021-04-21">April 21, 2021</time>.
          </p>
          <div className="buttons">
            <Button
              text="See my works"
              href="#projects"
              icon="./icons/forward.svg"
              primary
            />
            <Button
              text="Contact me"
              href="#contact"
              icon="./icons/forward.svg"
            />
          </div>
        </div>
        <div className="right">
          <img src="img/me.jpg" alt="Me" />
        </div>
      </div>
    );
  }
}

export default Hero;
