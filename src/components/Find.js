import React from 'react'
import Found from './Found'
import Input from './Input'

const Find = ({inputChange, findBeam, foundBeam}) => {
  return (
    <>
      <p>Find Beam</p>
      <Input inputChange={inputChange} findBeam={findBeam}/>
      {foundBeam?
        <Found foundBeam={foundBeam}/>
        :
        <div></div>
      }
    </>
  )
}

export default Find
