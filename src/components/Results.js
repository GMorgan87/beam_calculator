import React from 'react'
import '../css/Results.css'

const Results = ({beam, calcObject, deflMod, stressMod}) => {
  return (
    <div className="results">
      <div className="beam-display">
        <h3 className="beam-header">BEAM: {beam.desc}</h3>
        <table className="found-table">
          <tbody>
            <tr>
              <td className="t-left">Height:</td>
              <td className="t-right">{beam.x}mm</td>
            </tr>
            <tr>
              <td className="t-left">Width:</td>
              <td className="t-right">{beam.y}mm</td>
            </tr>
            {!['U','P'].includes(beam.desc[0])?
              <tr>
                <td className="t-left">Wall Thk:</td>
                <td className="t-right">{beam.thk}mm</td>
              </tr>
              :
              <>
                <tr>
                  <td className="t-left">Web Thk:</td>
                  <td className="t-right">{beam.thkWeb}mm</td>
                </tr>
                <tr>
                  <td className="t-left">Flange Thk:</td>
                  <td className="t-right">{beam.thkFlange}mm</td>
                </tr>
              </>
            }
            <tr>
              <td className="t-left">kg/m:</td>
              <td className="t-right">{beam.mass}kg</td>
            </tr>
            <tr>
              <td className="t-left">C.S.A.:</td>
              <td className="t-right">{beam.csa}mm<sup>2</sup></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="calcs-display">
        <h3 className="beam-header">CALCULATIONS</h3>
        <div className="calc-wrapper">
          <p className="calc-label">Load:</p>
          <p className="value">{calcObject.load}N</p>
        </div>
        <div className="calc-wrapper">
          <p className="calc-label">Safety Factor (SF):</p>
          <p className="value">{calcObject.safety}</p>
        </div>
        <div className="calc-wrapper">
          <p className="calc-label">Force (F):</p>
          <p className="value">{calcObject.force}N</p>
        </div>
        <div className="calc-wrapper">
          <p className="calc-label">Span (L):</p>
          <p className="value">{calcObject.span}mm</p>
        </div>
        <div className="calc-wrapper">
          <p className="calc-label">Youngs Modulus (E):</p>
          <p className="value">205000MPa</p>
        </div>
        <div className="calc-wrapper">
          <p className="calc-label">Beam I:</p>
          <p className="value">{beam.i}cm<sup>4</sup></p>
        </div>
        <div className="calc-wrapper">
          <p className="calc-label">Baem Z:</p>
          <p className="value">{beam.z}cm<sup>3</sup></p>
        </div>
        <div className="calc-wrapper">
          <p className="calc-label">Max Deflection:</p>
          {/* <div className='calc'>
            <p className="calc-top">WxL<sup>3</sup></p>
            <p >{deflMod}xExI</p>
          </div> */}
          <p className="value"><strong>{calcObject.deflection}mm</strong></p>
        </div>
        <div className="calc-wrapper">
          <p className="calc-label">Allowable Deflection:</p>
          {/* <p>L/{calcObject.defl} = </p> */}
          <p className="value">{(calcObject.span/calcObject.defl).toFixed(2)}mm</p>
        </div>
        <div className="calc-wrapper">
          <p className="calc-label">Max Stress:</p>
          {/* <div>
            <p className="calc-top">WL</p>
            <p className="calc-bottom">{stressMod}xZ</p>
          </div> */}
          <p className="value"><strong>{calcObject.stress}MPa</strong></p>
        </div>
        <div className="calc-wrapper">
          <p className="calc-label">Allowable Stress:</p>
          {/* <p>{calcObject.grade} x 0.85 = </p> */}
          <p className="value">{(calcObject.grade*0.85).toFixed(2)}MPa</p>
        </div>
      </div>

    </div>
  )
}

export default Results
