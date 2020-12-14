import React, { useState, useEffect } from 'react'

const Check = ({inputChange, type}) => {

  const [beams, setBeams] = useState([])

  useEffect(() => {
    fetch(`http://resteel.herokuapp.com/${type}`)
    .then(res => res.json())
    .then(data => setBeams(data))
  })

  const getBeams = () => {
    return beams.map(beam => <option value={beam.id}>{beam.desc}</option>)
  }

  return (
    <>
      <h2>Check Beam</h2>
      {beams.length>0?
      <label>Select Beam:
        <select name="beam">
          {getBeams()}
        </select>
      </label>
      :
      <div></div>
      }

    </>
  )
}

export default Check
