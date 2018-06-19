import React from 'react'

export default props => (
  <div className="menu">
    <div
    onClick={props.switchMode}
    id="professional"
    className={(props.mode === 'professional') ? 'link left active' : 'link left'}
    >PROFESSIONAL</div>

    <div className="divider"></div>

    <div
    onClick={props.switchMode}
    id="personal"
    className={(props.mode === 'personal') ? 'link right active' : 'link right'}
    >PERSONAL</div>
  </div>
)