import React from 'react'
import '../css/Found.css'

const Found = ({foundBeam, calcObject}) => {
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
        <p>F = W x 9.81 x Safety Factor = {calcObject.force}N</p>
        <p>L = {calcObject.span}</p>
        <p>E = 205000</p>
        <p>I = {foundBeam.ixx*10000}mm<sup>4</sup> </p>
        <p>Z = {foundBeam.zxx*1000}mm<sup>3</sup></p>
        <p>Max. Deflection = (WxL<sup>3</sup>)/(48xExI) = <strong>{calcObject.deflection}mm</strong></p>
        <p>Allowable deflection = {(calcObject.span/calcObject.defl).toFixed(2)}mm</p>
        <p>Max. Deflection = (WxL<sup>3</sup>)/(48xExI) = <strong>{calcObject.deflection}mm</strong></p>
        <p>Max. Stress = (WL)/(4Z) = <strong>{calcObject.stress}MPa</strong></p>
        <p>Allowable Stress = {(calcObject.grade*0.85).toFixed(2)}MPa</p>
      </div>

    </div>
  )
}

export default Found
