import {useState} from 'react';
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  let[mode,setMode] = useState("light");
  return (
    <>
      <Navbar Mode={mode} SetMode={setMode}/>
    </>
  );
}

export default App;
