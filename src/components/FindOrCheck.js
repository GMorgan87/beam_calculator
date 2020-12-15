import React from 'react'
import '../css/FindOrCheck.css'

const FindOrCheck = (props) => {
  return (
    <div className='find-check'>
      <ul>
          <li onClick={props.findSelect}>FIND BEAM</li>
          <li onClick={props.checkSelect}>CHECK BEAM</li>
      </ul>
    </div>
  )
}

export default FindOrCheck
