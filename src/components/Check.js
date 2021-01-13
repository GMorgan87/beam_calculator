import React from 'react'
import CheckInput from './CheckInput'

const Check = ({inputChange, beams}) => {

  

  return (
    <>
      <h2>Check Beam</h2>
      <CheckInput beams={beams} inputChange={inputChange}/>
    </>
  )
}

export default Check
