import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar.js"
import MascotTail, {MascotLookAround, MascotJumping, MascotJumpingLook, MascotTailScared, MascotSnooze, MascotSploot, MascotAnimation} from './components/Mascot';
import Timer from './components/Timer';

function App() {
  return (
    <div className="App">
        <Navbar />
        <div className='App-pomodoro'>
          <Timer />
          </div>
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <div className='App-mascot'>
          <MascotAnimation />
        </div>
    </div>
  );
}

export default App;
