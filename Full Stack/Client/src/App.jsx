import React from "react";
import Header from "./Header/Header";
import Hero from "./componenets/Hero/Hero";
import "./App.css";
import Companies from "./componenets/Companies/Companies";
import Residences from "./componenets/Residences/Residences";
import slider from "./utils/Slider";

function App() {
  return (
    <>
      <div className="App">
        <div>
          <div className="white-gradient" />
          <Header />
          <Hero />
        </div>
        <Companies/>
        <Residences/> 
        {/*<slider/>*/}
      </div>
    </>
  );
}
export default App;
