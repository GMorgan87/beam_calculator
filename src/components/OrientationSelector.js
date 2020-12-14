import React from 'react'
import '../css/OrientSelect.css'

const OrientationSelector = ({ orientationSelect, XorY }) => {
  return (
    <ul className="orient-select">
      <li onClick={orientationSelect} className={XorY === 'x' ? 'selected': ''} id='x'>Vertical</li>
      <li onClick={orientationSelect} className={XorY === 'y' ? 'selected': ''} id='y'>Horizontal</li>
    </ul>
  )
}

export default OrientationSelector
