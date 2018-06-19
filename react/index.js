import React, {Component} from 'react'
import {render} from 'react-dom'
import {BrowserRouter as Router} from 'react-router-dom'

import Menu from './components/menu'

render((
  <Router>
    <div className="app">
      <main>
        <Menu />
        {/* <Route path="/hangman" component={Menu} /> */}
      </main>
    </div>
  </Router>
), document.getElementById('app'))