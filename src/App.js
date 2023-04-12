import React from "react";
import "./App.css";
import Main from "./components/Main/main";
import Home from "./components/Home/home";
import Footer from "./components/Footer/footer";
import Navbar from "./components/Navbar/navbar";
import About from "./components/About/about";
import Experience from "./components/Experience/experience.component";
// import Poppup from "./components/poppup/poppup";
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Experience />
      <Main />
      <About />
      <Footer />
      {/* <Poppup /> */}
    </>
  );
}

export default App;
