import React from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/hero";
import About from "./components/about/about";
import Skills from "./components/skills/skills";
import Services from "./components/services/Services"
import Footer from './components/footer/Footer'

const App = () => {

  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Services/>
      <Footer/>
    </div>
  );
}

export default App;
