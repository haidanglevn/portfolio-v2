import React from "react";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import About from "../components/About";
import Contact from "../components/Contact";

function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <About />
      <Contact/>
    </>
  );
}

export default Home;
