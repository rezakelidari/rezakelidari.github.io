import React, { Component } from "react";
import "./Projects.css"
import Button from "../Button/Button";

class Projects extends Component {
  state = {
    projects: [
      {
        name: "IconEngine",
        desc: "A collection of 200+ free high quality MIT licensed MIT icons for use in your web projects. Developed By reza kelidari & fully open-source!",
        image: "./img/iconengine.jpg",
        websiteLink: "https://rezakelidari.github.io/IconEngine/",
        githubLink: "https://github.com/rezakelidari/IconEngine/",
      },
      {
        name: "Travel to iran",
        desc: "A tourist site that introduces popular destinations to tourists (not completed).",
        image: "./img/travel_to_iran.jpg",
        websiteLink: "https://rezakelidari.github.io/Travel_to_iran/",
        githubLink: "https://github.com/rezakelidari/Travel_to_iran/",
      },
      {
        name: "My portfolio",
        desc: "This is my portfolio site, which includes my profile, my abilities, and my portfolio. Developed by React.js",
        image: "./img/my_portfolio.jpg",
        websiteLink: "https://rezakelidari.github.io/",
        githubLink: "https://github.com/rezakelidari/rezakelidari.github.io/",
      },
    ],
  };
  render() {
    return (
      <div id="projects" className="container page">
        <h1 className="heading section-heading">Projects</h1>
        <div className="wrapper">
          {this.state.projects.map((project) => {
            return <Project key={project.name} data={project} />;
          })}
        </div>
      </div>
    );
  }
}

export default Projects;

class Project extends Component {
  state = {
    name: this.props.data.name,
    desc: this.props.data.desc,
    image: this.props.data.image,
    websiteLink: this.props.data.websiteLink,
    githubLink: this.props.data.githubLink,
  };
  render() {
    return (
      <div className="project">
        <img src={this.state.image} alt={this.state.name} className="cover" />
        <div className="details">
          <h3 className="heading">{this.state.name}</h3>
          <p className="subheading">{this.state.desc}</p>
          <div className="buttons">
            <Button
              text="Go to page"
              href={this.state.websiteLink}
              icon="./icons/external_link.svg"
              primary
              blank
            />
            <Button
              text="Open in github"
              href={this.state.githubLink}
              icon="./icons/external_link.svg"
              blank
            />
          </div>
        </div>
      </div>
    );
  }
}
