import React, { Component } from "react";
import "./States.css"

class States extends Component {
  state = {
    states: [
      {
        number: 3,
        title: "Projects done",
        desc: "I have completed three personal projects, you can see them in the Projects section",
      },
      {
        number: 0,
        title: "Years of exprience",
        desc: "I started learning Html, Css and js from<time datetime='2021-04-21'>April 21, 2021</time>. And so far Ihave learned these three things well.",
      },
      {
        number: 0,
        title: "Happy customer",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus, praesentium!",
      },
    ],
  };
  render() {
    return (
      <div id="states" className="container page">
        <h3 className="heading section-heading">States</h3>
        <div className="wrapper">
          {this.state.states.map((state) => {
            return <State key={state.title} data={state} />;
          })}
        </div>
      </div>
    );
  }
}

export default States;

class State extends Component {
  state = {
    number: this.props.data.number,
    title: this.props.data.title,
    desc: this.props.data.desc,
  };
  render() {
    return (
      <div className="state">
        <h3 className="number">{this.state.number}</h3>
        <div className="heading">{this.state.title}</div>
        <p
          className="subheading"
          dangerouslySetInnerHTML={{ __html: this.state.desc }}
        ></p>
      </div>
    );
  }
}
