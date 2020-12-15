import React from 'react'

const Check = ({inputChange, beams}) => {

  let getBeams =  beams.map(beam => <option value={beam.id}>{beam.desc}</option>)

  return (
    <>
      <h2>Check Beam</h2>
      {getBeams.length>0?
      <label>Select Beam:
        <select name="beam">
          {getBeams}
        </select>
      </label>
      :
      <div>Fetching Beams...</div>
      }
    </>
  )
}

export default Check
