import React, { Component } from "react";
import "./About.css";
import Button from "../Button/Button";

class About extends Component {
  state = {};
  render() {
    return (
      <div id="about" className="container page">
        <h3 className="heading section-heading">About</h3>
        <div className="wrapper">
          <div className="left">
            <img src="./img/me.jpg" alt="Me" className="me" />
            <div className="details">
              <h3 className="title">Reza Kelidari</h3>
              <p className="subheading">CEO of my com</p>
              <br />
              <p className="desc">
                I'm a intern Front-end developer. I've started my internship on
                April 21, 2021.
              </p>
            </div>
          </div>
          <div className="right">
            <p className="subheading">Hi! This is Reza Kelidari</p>
            <h3 className="heading">Front-end web developer</h3>
            <p className="subheading">
              I started learning Html, Css and js from
              <time dateTime="2021-04-21">April 21, 2021</time>. And so far I
              have learned these three things well. As a front end developer, I
              love React.js, I've recently started learning it. Also, I have
              implemented this site completely with React js.
            </p>
            <div className="buttons">
              <Button
                text="Download Resume"
                href="./assets/Reza_Kelidari_Resume.pdf"
                icon="./icons/download.svg"
                primary
                blank
              />
              <Button
                text="Contact me"
                href="#contact"
                icon="./icons/forward.svg"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
