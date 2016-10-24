import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import App from './components/App'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Splash from './components/Splash'

import './style.css'
require('font-awesome/css/font-awesome.css');

render(
  <Router history={browserHistory} >
    <Route path='/' component={App} >
      <IndexRoute component={Splash} />
      <Route path='/contact' component={Contact} />
      <Route path='/projects' component={Projects} />
    </Route>
  </Router>,
  document.getElementById('root')
);
