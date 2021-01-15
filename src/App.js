import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import CalculatorContainer from './containers/CalculatorContainer';

function App() {

  const [start, setStart] = useState(false);

  useEffect(() => {
    fetch('https://resteel.herokuapp.com/')
            .then(res => res.json)
            .then(data => {
              setStart(true)
              console.log('ping')
            })
  });


  return (
    <div className="App">
      <Header/>
      {start?
      <CalculatorContainer/>
      :
      <></>
      }
      
    </div>
  );
}

export default App;
