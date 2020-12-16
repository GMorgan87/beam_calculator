import React from 'react'
import '../css/Found.css'

const Found = ({foundBeam}) => {
  return (
    <div className="results">
      <div className="beam-display">
        <h3 className="beam-header">{foundBeam.desc}</h3>
        <table className="found-table">
          <tbody>
            <tr>
              <td className="t-left">Height:</td>
              <td className="t-right">{foundBeam.x}mm</td>
            </tr>
            <tr>
              <td className="t-left">Width:</td>
              <td className="t-right">{foundBeam.y}mm</td>
            </tr>
            <tr>
              <td className="t-left">Wall Thk:</td>
              <td className="t-right">{foundBeam.thk}mm</td>
            </tr>
            <tr>
              <td className="t-left">kg/m:</td>
              <td className="t-right">{foundBeam.mass}kg</td>
            </tr>
            <tr>
              <td className="t-left">C.S.A.:</td>
              <td className="t-right">{foundBeam.csa}mm<sup>2</sup></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="calcs-display">
        <h3 className="beam-header">CALCULATIONS</h3>
        <p>Max. Deflection =</p>
        <p>Max. Stress =</p>
      </div>

    </div>
  )
}

export default Found
