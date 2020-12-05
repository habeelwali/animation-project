import React from 'react'
import useWebAnimations from "@wellyshen/use-web-animations";
import ss from './images/lion.gif'
import deer from './images/deer.gif'

import './App.css';

function App() {

  const { ref, } = useWebAnimations({
    keyframes: [
      { transform: 'translate(-90%,0)' },
      { transform: 'translate(90%,0)' }
    ],
    timing: {
      duration: 5000,
      playbackRate: 1,
      iterations: Infinity,
      easing: "ease-in-out"
    }
  });
  return (
    <div className="App">
     <div className="box" ref={ref}>
     <img className="li" src={ss} alt="" />
     <img  className="fig" src={deer} alt=""/>
     </div>
    </div>
  );
}

export default App;
