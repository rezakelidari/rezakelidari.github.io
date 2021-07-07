import React, { Component } from "react";
import "./Navbar.css"

class Navbar extends Component {
  state = {
    navs: [
      {
        text: "Home",
        icon: "./assets/svg/home.svg",
        href: "#home",
      },
      {
        text: "Skills",
        icon: "./assets/svg/skills.svg",
        href: "#skills"
      },
      {
        text: "States",
        icon: "./assets/svg/states.svg",
        href: "#states"
      },
      {
        text: "Projects",
        icon: "./assets/svg/projects.svg",
        href: "#projects"
      },
      {
        text: "About",
        icon: "./assets/svg/about.svg",
        href: "#about"
      },
      {
        text: "Contact",
        icon: "./assets/svg/contact.svg",
        href: "#contact",
      }
    ]
  };
  render() {
    return (
      <div className="bottom">
        <nav>
          {this.state.navs.map(nav => {
            return <NavItem key={nav.text} data={nav} />
          })}
          {/* <NavItem name="Contact" icon="contact" dest="#contact" /> */}
        </nav>
      </div>
    );
  }
}

export default Navbar;

class NavItem extends Component {
  state = {
    text: this.props.data.text,
    icon: this.props.data.icon,
    href: this.props.data.href,
  };

  render() {
    return (
      <a href={this.state.href} className="nav-item">
        <img src={this.state.icon} alt="" className="icon" />
        <div className="item-name">{this.state.text}</div>
      </a>
    );
  }
}