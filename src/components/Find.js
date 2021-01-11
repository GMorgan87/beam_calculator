import React from 'react'
import Found from './Found'
import Input from './Input'

const Find = ({inputChange, findBeam, foundBeam, XorY, calcObject}) => {
  return (
    <>
      <h3>Find Beam</h3>
      <Input inputChange={inputChange} findBeam={findBeam} XorY={XorY}/>
      {foundBeam?
        <Found foundBeam={foundBeam} calcObject={calcObject}/>
        :
        <div></div>
      }
    </>
  )
}

export default Find
