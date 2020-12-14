import React from 'react'
import '../css/TypeSelect.css'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

const TypeSelect = ({typeSelect, selected}) => {
  return (
    <ul className="type-select">
      <Tippy content="Rectangular Hollow Section">
        <li onClick={typeSelect} className={selected === 'rhs' ? 'selected': ''} id='rhs'>RHS</li>
      </Tippy>
      <Tippy content="Square Hollow Section">
        <li onClick={typeSelect} className={selected === 'shs' ? 'selected': ''} id='shs'>SHS</li>
      </Tippy>
      <Tippy content="Circular Hollow Section">
        <li onClick={typeSelect} className={selected === 'chs' ? 'selected': ''} id='chs'>CHS</li>
      </Tippy>
      <Tippy content="Universal Column">
        <li onClick={typeSelect} className={selected === 'uc' ? 'selected': ''} id='uc'>UC</li>
      </Tippy>
      <Tippy content="Universal Beam">
        <li onClick={typeSelect} className={selected === 'ub' ? 'selected': ''} id='ub'>UB</li>
      </Tippy>
      <Tippy content="Parallel Flange CHannel">
        <li onClick={typeSelect} className={selected === 'pfc' ? 'selected': ''} id='pfc'>PFC</li>
      </Tippy>
    </ul>
  )
}

export default TypeSelect
