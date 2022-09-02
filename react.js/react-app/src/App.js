// import logo from './logo.svg';
import React from 'react';
import './App.css';
import InputArea from './components/InputArea';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
     <Navbar title="Encriptoo" navlink1="Home" navlink2="About us" navlink3="Our Services"/>
     <div className="container">
      <InputArea/>
     </div>
    </>
  );
}

export default App;
