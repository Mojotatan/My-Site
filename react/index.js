import React from 'react'
import {Route, BrowserRouter as Router} from 'react-router-dom'
import {render} from 'react-dom'

import App from './app'

render((
  <Router>
    <Route path='/' component={App} />
  </Router>
), document.getElementById('app'))