import React from 'react'
import '../css/Input.css'

const Input = ({inputChange, findBeam, XorY}) => {

  return (
    <form className='inputs' onSubmit={findBeam}>
        <div className='input-wrapper'>
          <label htmlFor="span">Span (mm):</label>
          <input onChange={inputChange} type='number' name='span' required/>
        </div>
        <div className='input-wrapper'>
          <label htmlFor="mass">Weight (kg):</label>
          <input onChange={inputChange} type='number' name='mass' required/>
        </div>
        <div className='input-wrapper'>
          <label htmlFor="grade">Steel Grade:</label>
          <input onChange={inputChange}  type="number" name="grade" defaultValue="355" className="grade-input" required/>
        </div>
        <div className='input-wrapper'>
          <label htmlFor="safety">Safety Factor:</label>
          <input onChange={inputChange}  type="number" name="safety" defaultValue="1" step="0.01" className="safety-input" required/>
        </div>
        <div className='defl-wrapper'>
          <label>Allowable Deflection:</label> 
            <div>
              <span>L/</span><input onChange={inputChange} type="number" name="defl" defaultValue="250" className="defl-input" required/>
            </div>
        </div>
        <div className='radios-wrapper'>
          <label htmlFor="XorY">Load Axis:</label>
          <div className="radios">
            <div className="radio"><input onClick={inputChange} type="radio" value="x" name="XorY" checked={XorY==="x"}/>X</div>
            <div className="radio"><input onClick={inputChange} type="radio" value="y" name="XorY" checked={XorY==="y"}/>Y</div>
          </div>
        </div>
        <input type='submit' value="CALCULATE" className="calc-button"/>
    </form>
  )
}

export default Input