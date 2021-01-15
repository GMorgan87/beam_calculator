import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import LandingPage from './components/LandingPage'
import CalculatorContainer from './containers/CalculatorContainer';

function App() {

  const [start, setStart] = useState(false);

  const handleStart = () => {
    setStart(true)
  }


  return (
    <div className="App">
      <Header/>
      {start?
      <CalculatorContainer/>
      :
      <LandingPage handleStart={handleStart}/>
      }
      
    </div>
  );
}

export default App;
