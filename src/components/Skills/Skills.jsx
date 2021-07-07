import React, { Component } from "react";
import "./Skills.css"

class Skills extends Component {
  state = {
    skills: [
      {
        name: "Html/Css/JS",
        desc: "I started learning Html, Css and js from <time datetime='2021-04-21'>April 21, 2021</time>. And so far I have learned these three things well.",
        icon: "./assets/svg/code.svg",
      },
      {
        name: "React.js",
        desc: "As a front end developer, I love React.js, I've recently startedlearning it.",
        icon: "./assets/svg/react.svg",
      },
    ],
  };
  render() {
    return (
      <div id="skills" className="container page">
        <h3 className="heading section-heading">Skills</h3>
        <div className="wrapper">
          {this.state.skills.map((skill) => {
            return <Skill key={skill.name} data={skill} />;
          })}
        </div>
      </div>
    );
  }
}

export default Skills;

class Skill extends Component {
  state = {
    name: this.props.data.name,
    desc: this.props.data.desc,
    icon: this.props.data.icon,
  };
  render() {
    return (
      <div className="skill">
        <img src="./assets/img/me.jpg" alt="Reza Kelidari" className="me" />
        <h3 className="heading">
          <img src={this.state.icon} alt="" className="icon" />
          {this.state.name}
        </h3>
        <p
          className="subheading"
          dangerouslySetInnerHTML={{ __html: this.state.desc }}
        ></p>
      </div>
    );
  }
}
