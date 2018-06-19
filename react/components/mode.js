import React from 'react'

import Menu from './menu'
import Submenu from './submenu'

export default props => {
  return(
    <main className={props.mode}>
      <Menu mode={props.mode} switchMode={props.switchMode} />
      <Submenu
      items={
        (props.mode === 'professional') ?
        ['bio', 'resume']
        :
        ['bio', 'random stuff']
      }
      current={props.current}
      switchCurrent={props.switchCurrent}
      />
    </main>
  )
}