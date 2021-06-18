import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import States from "./components/States";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

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
