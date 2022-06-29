import React from "react";
import Hero from "../components/Home/hero";
import Services from "../components/Home/services";
import About from "../components/Home/about";
import Case from "../components/Home/case";
import Contact from "../components/Home/contact";
function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Case />
      <Contact />
    </>
  );
}

export default Home;
