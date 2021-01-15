import React, { useEffect, useState } from 'react';

import '../css/LandingPage.css'

const LandingPage = ({handleStart}) => {

const [loaded, setLoaded] = useState(false)


useEffect(() => {
    fetch('https://resteel.herokuapp.com/')
            .then(res => res.json)
            .then(data => {
                // setLoaded(true)
                console.log('ping')
            })
    });

    const btnText = loaded? "LAUNCH CALCULATOR" : "LOADING..."

  return (
    <>
        <button onClick={()=>setLoaded(!loaded)}>TEST</button>
        <button className="start-button" onClick={handleStart} disabled={!loaded}>{btnText}</button>
    </>
  )
}

export default LandingPage