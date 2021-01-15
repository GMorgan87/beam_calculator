import React from 'react'
import '../css/Input.css'

// import CheckInput from './CheckInput'

const CheckInput = ({inputChange, beams, checkBeam, beamSelectChange, XorY, fixSim, evenPoint}) => {

  let getBeams =  beams.map((beam, index) => <option value={index} key={index}>{beam.desc}</option>)


  return (
    <>
      <form className='inputs' onSubmit={checkBeam}>
        {getBeams.length>0?
          <div className='beam-wrapper'>
            <label className="beam-label" htmlFor="beam" >Select Beam:</label>
            <select name="beam" onChange={beamSelectChange}>
              {getBeams}
            </select>
          </div>
          :
          <div>Fetching Beams...</div>
        }

        <div className='input-wrapper'>
          <label htmlFor="span">Span (mm):</label>
          <input onChange={inputChange} type='number' name='span' required/>
        </div>

        <div className='radios-wrapper'>
          <label htmlFor="XorY">Beam End Type:</label>
          <div className="radios">
            <div className="radio">Fixed<input onChange={inputChange} type="radio" value="f" name="fixSim" checked={fixSim==="f"}/></div>
            <div className="radio">Not Fixed<input onChange={inputChange} type="radio" value="s" name="fixSim" checked={fixSim==="s"}/></div>
          </div>
        </div>

        <div className='input-wrapper'>
          <label htmlFor="mass">Load (N):</label>
          <input onChange={inputChange} type='number' name='load' required/>
        </div>

        <div className='radios-wrapper'>
          <label htmlFor="XorY">Load Type:</label>
          <div className="radios">
            <div className="radio">Evenly Distributed<input onChange={inputChange} type="radio" value="e" name="evenPoint" checked={evenPoint==="e"}/></div>
            <div className="radio">Point @ Centre<input onChange={inputChange} type="radio" value="p" name="evenPoint" checked={evenPoint==="p"}/></div>
          </div>
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
            <div className="radio">X<input onClick={inputChange} type="radio" value="x" name="XorY" checked={XorY==="x"}/></div>
            <div className="radio">Y<input onClick={inputChange} type="radio" value="y" name="XorY" checked={XorY==="y"}/></div>
          </div>
        </div>
        
        <input type='submit' value="CALCULATE" className="calc-button"/>
      </form>    </>
  )
}

export default CheckInput
