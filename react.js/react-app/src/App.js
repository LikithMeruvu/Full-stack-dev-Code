// import logo from './logo.svg';
import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import InputArea from "./components/InputArea";
// import DarkMode from './components/darkMode';

function App() {
  const [mode, setMode] = useState("light");
  // const [textMode, setTextMode] = useState("text-dark");

  let toggleBgMode = () => {
    if (mode === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };

  return (
    <>
      <Navbar title="Encriptoo" navlink1="Home" navlink2="About us" navlink3="Our Services" modeType={mode} toggleDM={toggleBgMode}/>
      <InputArea modeType={mode} toggleDM={toggleBgMode} />
    </>
  );
}

export default App;
