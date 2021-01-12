import React from 'react'
import '../css/TypeSelect.css'
import Tippy from '@tippyjs/react';
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
      <Tippy content="Rectangular Hollow Section">
        <li onClick={typeSelect} className={selected === 'rhs' ? 'selected': ''} id='rhs'>
            <img src={rhs} alt="RHS" className="svg"/>RHS
        </li>
      </Tippy>
      <Tippy content="Square Hollow Section">
        <li onClick={typeSelect} className={selected === 'shs' ? 'selected': ''} id='shs'>
            <img src={shs} alt="SHS" className="svg"/>SHS
        </li>
      </Tippy>
      <Tippy content="Circular Hollow Section">
        <li onClick={typeSelect} className={selected === 'chs' ? 'selected': ''} id='chs'>
            <img src={chs} alt="CHS" className="svg"/>CHS
        </li>
      </Tippy>
      <Tippy content="Universal Column">
        <li onClick={typeSelect} className={selected === 'uc' ? 'selected': ''} id='uc'>
            <img src={uc} alt="UC" className="svg"/>UC
        </li>
      </Tippy>
      <Tippy content="Universal Beam">
        <li onClick={typeSelect} className={selected === 'ub' ? 'selected': ''} id='ub'>
            <img src={ub} alt="UB" className="svg"/>UB
        </li>
      </Tippy>
      <Tippy content="Parallel Flange Channel">
        <li onClick={typeSelect} className={selected === 'pfc' ? 'selected': ''} id='pfc'>
            <img src={pfc} alt="PFC" className="svg"/>UB
        </li>
      </Tippy>
    </ul>
  )
}

export default TypeSelect
