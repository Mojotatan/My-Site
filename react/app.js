import React, {Component} from 'react'

import Professional from './containers/professional'
import Personal from './containers/personal'

import Mode from './components/mode'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      mode: 'professional',
      current: ''
    }

    this.switchMode = this.switchMode.bind(this)
    this.switchCurrent = this.switchCurrent.bind(this)
  }

  switchMode(e) {
    this.setState({
      mode: e.target.id,
      current: ''
    })
  }
  switchCurrent(e) {
    this.setState({current: e.target.id})
  }

  render() {
    return(
      <div className="app">
        <Mode
        mode={this.state.mode}
        switchMode={this.switchMode}
        current={this.state.current}
        switchCurrent={this.switchCurrent}
        />
      </div>
    )
  }
}

export default App