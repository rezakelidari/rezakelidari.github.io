import React, { Component } from "react";
import "./Footer.css"

class Footer extends Component {
  state = {
    links: [
      {
        text: "Home",
        icon: "./icons/home.svg",
        href: "#home",
      },
      {
        text: "Skills",
        icon: "./icons/skills.svg",
        href: "#skills",
      },
      {
        text: "States",
        icon: "./icons/states.svg",
        href: "#states",
      },
      {
        text: "Projects",
        icon: "./icons/projects.svg",
        href: "#projects",
      },
      {
        text: "About",
        icon: "./icons/about.svg",
        href: "#about",
      },
      {
        text: "Contact",
        icon: "./icons/contact.svg",
        href: "#contact",
      },
    ],

    contact: [
      {
        text: "reza.keliari.1382@gmail.com",
        icon: "./icons/email.svg",
        href: "mailto:reza.keliari.1382@gmail.com",
        blank: true,
      },
      {
        text: "Telegram",
        icon: "./icons/telegram.svg",
        href: "https://t.me/reza_kelidari_315",
        blank: true,
      },
      {
        text: "Tehran, Iran",
        icon: "./icons/location.svg",
      },
    ],

    social: [
      {
        text: "Github",
        icon: "./icons/external_link.svg",
        href: "https://github.com/rezakelidari",
        blank: true,
      },
      {
        text: "Instagram",
        icon: "./icons/external_link.svg",
        href: "https://www.instagram.com/rezakelidari_alone/",
        blank: true,
      },
      {
        text: "Telegram",
        icon: "./icons/external_link.svg",
        href: "https://t.me/reza_kelidari_315",
        blank: true,
      },
    ],
  };
  render() {
    return (
      <div id="footer" className="container">
        <footer>
          <div className="wrapper">
            <div className="col-title">
              <img src="./img/me.jpg" alt="" />
              <h1 className="heading">Reza Kelidari</h1>
              <p className="subheading">
                I'm a intern Front-end developer. I have started my internship
                on April 21, 2021.
              </p>
            </div>
            <div className="col-links">
              <h3 className="col-heading">
                Important
                <br />
                Links
              </h3>
              <ul>
                {this.state.links.map((link) => {
                  return <FooterItem key={link.text} data={link} />;
                })}
              </ul>
            </div>
            <div className="col-contact">
              <h3 className="col-heading">
                Contact
                <br />
                Me
              </h3>
              <ul>
                {this.state.contact.map((link) => {
                  return <FooterItem key={link.text} data={link} />;
                })}
              </ul>
            </div>
            <div className="col-social">
              <h3 className="col-heading">
                Social
                <br />
                Links
              </h3>
              <ul>
                {this.state.social.map((link) => {
                  return <FooterItem key={link.text} data={link} />;
                })}
              </ul>
            </div>
          </div>
        </footer>
        <p className="copyright">
          &copy; Copyright 2021 Reza Kelidari. All right Reversed.
        </p>
      </div>
    );
  }
}

export default Footer;

class FooterItem extends Component {
  state = {
    text: this.props.data.text,
    icon: this.props.data.icon,
    href: this.props.data.href !== undefined ? this.props.data.href : null,
    target: this.props.data.blank !== undefined ? "_blank" : "_self",
  };
  render() {
    return (
      <li>
        <a href={this.state.href} target={this.state.target}>
          <img src={this.state.icon} alt={this.state.text} className="icon" />
          {this.state.text}
        </a>
      </li>
    );
  }
}
