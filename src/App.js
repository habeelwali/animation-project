import React from 'react'
import useWebAnimations from "@wellyshen/use-web-animations";
import ss from './images/lion.gif'
import deer from './images/deer.gif'

import './App.css';

function App() {

  const { ref, getAnimation } = useWebAnimations({
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

  const speedUp = () => {
    const animation = getAnimation();
    animation.updatePlaybackRate(animation.playbackRate * 2.1);
    setInterval(
      () => {
        if (animation.playbackRate > 1) {
          animation.playbackRate *= .9;
        }
      }, 6000)
  };

  return (
    <div className="App">
     <div className="box" ref={ref} onClick={speedUp}>
     <img className="li" src={ss} alt="" />
     <img  className="fig" src={deer} alt=""/>
     </div>
    </div>
  );
}

export default App;
