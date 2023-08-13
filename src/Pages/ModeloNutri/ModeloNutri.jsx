import React from "react";

import Header from "../../Components/Header/Header";
import Home from "../../Components/Home/Home";
import About from "../../Components/About/About";
import Services from "../../Components/Services/Services";
// import Social from "../../Components/Social/Social";
import Footer from "../../Components/Footer/Footer";

export default function ModeloNutri() {
  return (
    <div>
      <Header/>
      <Home/>
      <About/>
      <Services/>
      {/* <Social/> */}
      <Footer/>
    </div>
  )
}