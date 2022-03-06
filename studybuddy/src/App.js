
import React, { useState, useEffect } from "react";

import Button from '@mui/material/Button';

import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar.js"
import InputMessage from './components/MessageForm';
import { getMsg, createMsg } from './services/messageSvc';
import Message from './components/Message';

const App = () => {
  const [message, setMessage] = useState([]);

  const getData = async() => {
    const res = await getMsg();
    setMessage(res)
  }

  const addMessage = async (msg) => {
    await createMsg(msg);
    await getData();
  }

  return (
    <div className="App">
        <Navbar />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <InputMessage addMessage={addMessage}/>
        {/* <button onClick={getData}>Get Message</button> */}
        <Message />
    </div>
  );
}

export default App;
