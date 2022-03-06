import './Timer.css';

import React, {useEffect, useState} from "react"; 

import Button from "@mui/material/Button";
import Typography from '@mui/material/Typography';

function padLeadingZeros(num, size) {
  var s = num+"";
  while (s.length < size) s = "0" + s;
  return s;
}

const MODE = {
  POMODORO: "POMODORO",
  SHORTREST: "SHORTREST",
  LONGREST: "LONGREST"
};

function Timer() {
  let [secondsLeft, setSecondsLeft] = useState(25 * 60);
  const [timer, setTimer] = useState();
  const [mode, setMode] = useState(MODE.POMODORO);

  const startTimer = () => {
    console.log("starting");
    const timer = setInterval(() => {
      setSecondsLeft((secondsLeft) => secondsLeft - 1);
      if (secondsLeft === 0) {
        clearInterval(timer);
      }
    }, 1000);
    setTimer(timer);
  };

  const stopTimer = () => {
    console.log("stopping");
    clearInterval(timer);
  }

  useEffect(() => {
    if (secondsLeft === 0) {
      clearInterval(timer);
    }
  }, [secondsLeft, timer]);

  useEffect(() => {
    return () => clearInterval(timer);
  }, [timer]);

  useEffect(() => {
    return () => mode;
  }, [mode]);

  const resetTimer = () => {
    console.log(mode);
    if (mode === MODE.POMODORO) {
      setSecondsLeft((secondsLeft) => (25 * 60));
    } else if (mode === MODE.SHORTREST) {
      setSecondsLeft((secondsLeft) => (5 * 60));
    } else if (mode === MODE.LONGREST) {
      setSecondsLeft((secondsLeft) => (15 * 60));
    }
    console.log(mode);
  }

  // This exists purely because i could not get the update to mode to occur
  // before the call to resetTimer. i don't know why
  const resetTimerMode = (mode_param) => {
    console.log(mode);
    if (mode_param === MODE.POMODORO) {
      setSecondsLeft((secondsLeft) => (25 * 60));
    } else if (mode_param === MODE.SHORTREST) {
      setSecondsLeft((secondsLeft) => (5 * 60));
    } else if (mode_param === MODE.LONGREST) {
      setSecondsLeft((secondsLeft) => (15 * 60));
    }
    console.log(mode);
  }

  const pomodoro = () => {
    setMode(MODE.POMODORO);
    // stopTimer();
    resetTimerMode(MODE.POMODORO);
  }

  const shortRest = () => {
    setMode((mode) => MODE.SHORTREST);
    // stopTimer();
    resetTimerMode(MODE.SHORTREST);
  }

  const longRest = () => {
    setMode((mode) => MODE.LONGREST);
    // stopTimer();
    resetTimerMode(MODE.LONGREST);
  }

  return (
    <div className="Timer">
        <header className='Timer-header'>
            <Typography variant="h1" component="div" gutterBottom sx = {{color: 'white'}}>
                Pomodoro Timer
            </Typography>
            <div className='Timer-button-div-top'>
                <Button variant='contained' color='inherit' onClick={pomodoro}>Pomodoro</Button>
                <Button variant='contained' color='inherit' onClick={shortRest}>Short Rest</Button>
                <Button variant='contained' color='inherit' onClick={longRest}>Long Rest</Button>
            </div>
            <Typography variant="h1" component="div" gutterBottom sx = {{color: 'white'}}>
              {parseInt(secondsLeft/60)}:{padLeadingZeros(secondsLeft%60, 2)}
            </Typography>
            {/* <h1>{parseInt(secondsLeft/60)}:{padLeadingZeros(secondsLeft%60, 2)}</h1> */}
            <div className='Timer-button-div-bottom'>
                <Button variant='contained' color='inherit' onClick={startTimer}>Start</Button>
                <Button variant='contained' color='inherit' onClick={stopTimer}>Stop</Button>
                <Button variant='contained' color='inherit' onClick={resetTimer}>Reset</Button>
            </div>
        </header>
    </div>
  );
}

export default Timer;
