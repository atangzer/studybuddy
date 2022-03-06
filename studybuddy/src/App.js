
import React, { useState, useEffect } from "react";

import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar.js"
import BottledMessage from './components/BottledMessage';
import MsgDialog from './components/MsgDialog';
import MascotTail, {MascotLookAround, MascotJumping, MascotJumpingLook, MascotTailScared, MascotSnooze, MascotSploot, MascotAnimation} from './components/Mascot';
import Timer from './components/Timer';

const App = () => {

  return (
    <div className="App">
        <Navbar />
        <div className='App-pomodoro'>
          <Timer />
          </div>
          <MsgDialog />
        <BottledMessage />
        <div className='App-mascot'>
          <MascotAnimation />
        </div>
    </div>
  );
}

export default App;
