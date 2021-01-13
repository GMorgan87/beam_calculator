import React from 'react'
import Found from './Found'
import CheckInput from './CheckInput'

const Check = ({inputChange, beams, checkBeam, beamSelectChange, XorY, beam, calcObject}) => {

  

  return (
    <>
      <h2>Check Beam</h2>
      <CheckInput beams={beams} inputChange={inputChange} checkBeam={checkBeam} beamSelectChange={beamSelectChange} XorY={XorY}/>
      {beam?
        <Found beam={beam} calcObject={calcObject}/>
        :
        <div></div>
      }
    </>
  )
}

export default Check
