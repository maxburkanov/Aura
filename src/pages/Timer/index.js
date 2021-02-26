// Globals
import "./styles.scss";
import React, { useEffect, useState } from "react";

// Components
import { Button } from "components/Button";

// Sub-component
function Expired() {
  return (
    <div className="aura-expired">
      <div className="aura-expired-emoji">⚠️</div>
      <div className="aura-expired-text">Timer expired!</div>
    </div>
  );
}

// Component
function Timer() {
  // Hooks - state
  const [counter, setCounter] = useState({
    mins: 0,
    secs: 0,
    isOn: false 
  });
  const [loop, setLoop] = useState()

  // TODO: implement counter...
  React.useEffect(()=>{

    if (counter.secs === 0) {
      return function cleanup() {
        clearInterval(loop);
      };
    }
  }, [counter]) 
  
  const handleStart = () => {
    
    if (!counter.isOn) {
      setCounter({ mins: 0, secs: 59, isOn: true})
      setLoop(setInterval(()=>{
        setCounter(prev => {
            return {...prev, secs: prev.secs && prev.secs-1}
          })
      }, 1000) )
    }

  }

  const handleReset = () => {
    setCounter({ mins: 1, secs: 0, isOn: false})  
  }

  const seconds = counter.secs < 10? "0" + counter.secs : counter.secs
  // Render
  return (
    <div className="aura-page aura-timer">
      <h1>Timer</h1>

      <div className="aura-page-content">
        <div className="aura-timer-clock">{counter.mins}:{ seconds }</div>
        {counter.secs <= 0 && counter.mins <= 0 ? <Expired /> : null}

        <div className="aura-timer-buttons">
          <Button onClick={handleStart}>Start</Button>
          <Button onClick={handleReset}>Reset</Button>
        </div>
      </div>
    </div>
  );
}

export { Timer };
