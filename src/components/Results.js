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
        <div>
          <span>Load =</span>
          <span>{calcObject.load}N</span>
        </div>
        <div>
          <span>Force (F) =</span>
          <span>Load x Safety Factor = {calcObject.force}N</span>
        </div>
        <div>
          <span>Span (L) =</span>
          <span>{calcObject.span}mm</span>
        </div>
        <div>
          <span>Youngs Modulus (E) =</span>
          <span>205000MPa</span>
        </div>
        <div>
          <span>I =</span>
          <span>{beam.i*10000}mm<sup>4</sup></span>
        </div>
        <div>
          <span>Z =</span>
          <span>{beam.z*1000}mm<sup>3</sup></span>
        </div>
        <div>
          <span>Max Deflection =</span>
          <div className='calc'>
            <span className="calc-top">WxL<sup>3</sup></span>
            <span>{deflMod}xExI</span>
          </div>
          <span>=</span>
          <span><strong>{calcObject.deflection}mm</strong></span>
        </div>
        <div>
          <span>Allowable Deflection = </span>
          <span>L/{calcObject.defl} = </span>
          <span>{(calcObject.span/calcObject.defl).toFixed(2)}mm</span>
        </div>
        <div>
            <span>Max Stress = </span>
            <div>
              <span className="calc-top">WL</span>
              <span className="calc-bottom">{stressMod}xZ</span>
            </div>
            <span>= {calcObject.stress}MPa</span>
        </div>
        <div>
          <span>Allowable Stress = </span>
          <span>{calcObject.grade} x 0.85 = </span>
          <span>{(calcObject.grade*0.85).toFixed(2)}MPa</span>
        </div>
      </div>

    </div>
  )
}

export default Results
