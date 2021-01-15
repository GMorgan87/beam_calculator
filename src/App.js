import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
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
      <Footer/>
    </div>
  );
}

export default App;
