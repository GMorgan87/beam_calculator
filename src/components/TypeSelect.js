import React from 'react'
import '../css/TypeSelect.css'
import 'tippy.js/dist/tippy.css';
import shs from '../icons/SHS.svg'
import rhs from '../icons/RHS.svg'
import chs from '../icons/CHS.svg'
import uc from '../icons/UC.svg'
import ub from '../icons/UB.svg'
import pfc from '../icons/PFC.svg'

const TypeSelect = ({typeSelect, selected}) => {
  return (
    <ul className="type-select">
        <li onClick={typeSelect} className={selected === 'rhs' ? 'selected': ''} id='rhs'>
            <img src={rhs} alt="RHS" className="svg"/><p>RHS</p>
        </li>
        <li onClick={typeSelect} className={selected === 'shs' ? 'selected': ''} id='shs'>
            <img src={shs} alt="SHS" className="svg"/><p>SHS</p>
        </li>
        <li onClick={typeSelect} className={selected === 'chs' ? 'selected': ''} id='chs'>
            <img src={chs} alt="CHS" className="svg"/><p>CHS</p>
        </li>
        <li onClick={typeSelect} className={selected === 'uc' ? 'selected': ''} id='uc'>
            <img src={uc} alt="UC" className="svg"/><p>UC</p>
        </li>
        <li onClick={typeSelect} className={selected === 'ub' ? 'selected': ''} id='ub'>
            <img src={ub} alt="UB" className="svg"/><p>UB</p>
        </li>
        <li onClick={typeSelect} className={selected === 'pfc' ? 'selected': ''} id='pfc'>
            <img src={pfc} alt="PFC" className="svg"/><p>PFC</p>
        </li>
    </ul>
  )
}

export default TypeSelect
