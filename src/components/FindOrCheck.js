import React from 'react'
import '../css/FindOrCheck.css'

const FindOrCheck = (props) => {
  return (
    <div className='find-check'>
      <ul>
          <li onClick={props.findSelect}>Find Beam</li>
          <li onClick={props.checkSelect}>Check Beam</li>
      </ul>
    </div>
  )
}

export default FindOrCheck
