import React, { useEffect, useState } from 'react';

import '../css/LandingPage.css'

const LandingPage = ({handleStart}) => {

const [loaded, setLoaded] = useState(false)


useEffect(() => {
    fetch('https://resteel.herokuapp.com/')
            .then(res => res.json)
            .then(data => {
                setLoaded(true)
                console.log('ping')
            })
    });

    const btnText = loaded? "START CALCULATOR" : "LOADING..."

  return (
    <div className="landing">
        <button className="start-button" onClick={handleStart} disabled={!loaded}>{btnText}</button>
        <p className="info">loading may take up to 30 seconds while api is launched</p>
    </div>
  )
}

export default LandingPage
