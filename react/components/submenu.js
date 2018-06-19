import React from 'react'
import {Link} from 'react-router-dom'

export default ({items, current, switchCurrent}) => (
  <div className="submenu">
    {items.map(item => (
      <div
      key={item}
      id={item}
      onClick={switchCurrent}
      className={(item === current) ? 'active link' : 'link'}
      >{item}</div>
    ))}
  </div>
)