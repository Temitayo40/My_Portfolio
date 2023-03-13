import React from "react";
import "./App.css";
import Main from "./components/Main/main";
import Home from "./components/Home/home";
import Footer from "./components/Footer/footer";
import Navbar from "./components/Navbar/navbar";
import About from "./components/About/about";
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Main />
      <About />
      {/* <Footer /> */}
    </>
  );
}

export default App;
