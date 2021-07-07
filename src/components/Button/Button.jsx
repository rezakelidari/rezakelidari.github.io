import React, { Component } from "react";
import "./Button.css";

class Button extends Component {
  state = {
    text: this.props.text,
    icon: this.props.icon !== undefined ? this.props.icon : null,
    func: this.props.func !== undefined ? this.props.func : null,
    href: this.props.href !== undefined ? this.props.href : null,
    target: this.props.blank !== undefined ? "_blank" : "_self",
    primary: this.props.primary !== undefined ? true : false,
  };

  render() {
    return (
      <a
        onClick={this.state.func}
        href={this.state.href}
        target={this.state.target}
        className={`button ${this.state.primary ? "primary" : "secondary"}`}
      >
        {this.state.text}
        {this.state.icon !== null && (
          <img src={this.state.icon} className="icon" alt="" />
        )}
      </a>
    );
  }
}

export default Button;
