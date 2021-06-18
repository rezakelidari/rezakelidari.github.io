import React, { Component } from "react";

class Contact extends Component {
  state = {
    contactInfo: [
      {
        icon: "call.svg",
        text: "+981234567890",
      },
      {
        icon: "email.svg",
        text: "reza.phoenix.1382@gmail.com",
      },
      {
        icon: "location.svg",
        text: "Tehran, Iran",
      },
    ],

    socialInfo: [
      {
        name: "Github",
        link: "https://github.com/rezakelidari",
      },
      {
        name: "Instagram",
        link: "https://www.instagram.com/rezakelidari_alone/",
      },
      {
        name: "Telegram",
        link: "https://t.me/reza_kelidari_315",
      },
    ],
  };
  render() {
    return (
      <div id="contact" className="container page">
        <h3 className="heading section-heading">Contact</h3>
        <div className="wrapper">
          <div className="left">
            <div className="heading">Hire / Inquiry</div>
            <p className="subheading">
              If you want me to develop the front end of your site, you can
              contact me through the following ways. (Note that the contact form
              does not work!)
            </p>
            <br />
            <div className="heading">Contact me</div>
            <ul>
              {this.state.contactInfo.map((contactInfo) => {
                return (
                  <ContactInfo key={contactInfo.text} data={contactInfo} />
                );
              })}
            </ul>
            <div className="heading">Social info</div>
            <ul>
              {this.state.socialInfo.map((socialInfo) => {
                return (
                  <li key={socialInfo.name}>
                    <a href={socialInfo.link}>
                      <img
                        src="./icons/external_link.svg"
                        alt=""
                        className="icon"
                      />
                      {socialInfo.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="right">
            <form action="#">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <div className="input-wrapper">
                  <img src="./icons/person.svg" alt="" className="icon" />
                  <input type="text" name="name" id="name" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <div className="input-wrapper">
                  <img src="./icons/email.svg" alt="" className="icon" />
                  <input type="email" name="email" id="email" />
                </div>
              </div>
              <div className="buttons">
                <button type="submit" onClick={event => event.preventDefault()}>
                  Send
                  <img src="./icons/send.svg" alt="" className="icon" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;

class ContactInfo extends Component {
  state = {
    icon: "./icons/" + this.props.data.icon,
    text: this.props.data.text,
  };
  render() {
    return (
      <li key={this.state.text}>
        <img src={this.state.icon} alt="" className="icon" />
        {this.state.text}
      </li>
    );
  }
}
