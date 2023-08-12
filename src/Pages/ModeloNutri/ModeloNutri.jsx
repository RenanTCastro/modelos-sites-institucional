import React from "react";

import Header from "../../Components/Header/Header";
import About from "../../Components/About/About";
import Services from "../../Components/Services/Services";
// import Social from "../../Components/Social/Social";
import Footer from "../../Components/Footer/Footer";

export default function ModeloNutri() {
  return (
    <div>
      <Header/>
      <About/>
      <Services/>
      {/* <Social/> */}
      <Footer/>
    </div>
  )
}