import React from 'react'
import '../css/Input.css'

const Input = ({inputChange, findBeam, XorY}) => {

  return (
    <form className='inputs' onSubmit={findBeam}> 
        <label>Span (L):
            <input onChange={inputChange} type='number' name='span' required/>mm
        </label>
        <br/>
        <label>Weight (W):
            <input onChange={inputChange} type='number' name='mass' required/>kg
        </label>
        <br/>
        <label>Steel Grade:
          <input onChange={inputChange}  type="number" name="grade" defaultValue="355" className="grade-input" required/>
        </label>
        <br/>
        <label>Safety Factor:
          <input onChange={inputChange}  type="number" name="safety" defaultValue="1" steps="0.01" className="safety-input" required/>
        </label>
        <br/>
        <label>Load Axis: 
            <input onClick={inputChange} type="radio" value="x" name="XorY" checked={XorY==="x"}/>X
            <input onClick={inputChange} type="radio" value="y" name="XorY" checked={XorY==="y"}/>Y
        </label>
        <br/>
        <label>Allowable Deflection: L/
          <input onChange={inputChange} type="number" name="defl" defaultValue="250" className="defl-input" required/>
        </label>
        <br/>
        <input type='submit' value="calculate"/>
    </form>
  )
}

export default Input
