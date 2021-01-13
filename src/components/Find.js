import React from 'react'
import Found from './Found'
import Input from './Input'

const Find = ({inputChange, findBeam, beam, XorY, calcObject}) => {
  return (
    <>
      <h3>Find Beam</h3>
      <Input inputChange={inputChange} findBeam={findBeam} XorY={XorY}/>
      {beam?
        <Found beam={beam} calcObject={calcObject}/>
        :
        <div></div>
      }
    </>
  )
}

export default Find
