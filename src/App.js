import React from "react";
import "./App.css";
import Main from "./components/Main/main";
import Home from "./components/Home/home";
import Footer from "./components/Footer/footer";
import Navbar from "./components/Navbar/navbar";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Main />
      {/* <Footer /> */}
    </>
  );
}

export default App;
