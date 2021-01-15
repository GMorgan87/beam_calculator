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


        <table className="calc-table">
          <tbody>
            {/* <tr>
              <td className="c-right">Load =</td>
              <td><strong>{calcObject.load}N</strong></td>
            </tr> */}
            {/* <tr>
              <td className="c-right">Force (F) =</td>
              <td colSpan="2">Load x Safety Factor =</td>
              <td><strong>{calcObject.force}N</strong></td>
            </tr> */}
            {/* <tr>
              <td className="c-right">Span (L) =</td>
              <td>{calcObject.span}mm</td>
            </tr> */}
            {/* <tr>
              <td className="c-right">Youngs Modulus (E) =</td>
              <td>205000MPa</td>
            </tr> */}
            {/* <tr>
              <td className="c-right">I =</td>
              <td>{beam.i*10000}mm<sup>4</sup></td>
            </tr> */}
            {/* <tr>
              <td className="c-right">Z =</td>
              <td>{beam.z*1000}mm<sup>3</sup></td>
            </tr> */}
            {/* <tr>
              <td className="c-right">Max Deflection =</td> 
               <td className="calc-top">WxL<sup>3</sup></td> 
               <td>= <strong>{calcObject.deflection}mm</strong></td>
            </tr> */}
            {/* <tr>
              <td></td>
              <td className="calc-bottom">{deflMod}xExI</td>
            </tr> */}
            {/* <tr>
              <td className="c-right">Allowable Deflection =</td>
              <td>L / {calcObject.defl}</td>
              <td>= {(calcObject.span/calcObject.defl).toFixed(2)}mm</td>
            </tr> */}
            {/* <tr>
              <td className="c-right">Max Stress =</td>
              <td className="calc-top">WL</td>
              <td>= <strong>{calcObject.stress}MPa</strong></td>
            </tr> */}
            {/* <tr>
              <td></td>
              <td className="calc-bottom">{stressMod}xZ</td>
            </tr> */}
            <tr>
              <td className="c-right">Allowable Stress =</td>
              <td>{calcObject.grade} x 0.85</td>
              <td>= {(calcObject.grade*0.85).toFixed(2)}MPa</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default Results
