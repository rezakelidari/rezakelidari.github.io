import React from "react";
import ReactDOM from "react-dom";

import "./styles/main.css";

import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import States from "./components/States/States";

ReactDOM.render(
  <React.Fragment>
    <Navbar />
    <Hero />
    <Skills />
    <States />
    <Projects />
    <About />
    <Contact />
    <Footer />
  </React.Fragment>,
  document.getElementById("root")
);
