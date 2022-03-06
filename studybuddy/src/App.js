
import React, { useState, useEffect } from "react";

import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar.js"
import BottledMessage from './components/BottledMessage';
import MsgDialog from './components/MsgDialog';

const App = () => {

  return (
    <div className="App">
        <Navbar />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <MsgDialog />
        <BottledMessage />
    </div>
  );
}

export default App;
