import logo from './logo.svg';
import './App.css';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

function App() {
  const yellow = useRef(null)
  const red = useRef(null)
  const black = useRef(null)
  const YellowDivinView = useInView(yellow)
  const RedDivinView = useInView(red)
  const BlackDivinView = useInView(black)

  console.log("YellowDivinView", YellowDivinView)
  return (
    <div className="App">
      <div ref={black} style={{height:"800px", backgroundColor:BlackDivinView?"black":"gray", 
      transition:"5s background"}}></div>
      <div ref={yellow} 
      style={{height:"800px", backgroundColor:YellowDivinView?"green":"yellow", 
      transition:"5s background"
      }}></div>
      <div ref={red} style={{height:"800px", backgroundColor:RedDivinView?"red":"orange", 
      transition:"5s background"}}></div>
    </div>
  );
}

export default App;
