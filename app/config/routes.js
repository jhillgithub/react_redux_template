import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import Main from '../pages/Main'
import Welcome from '../pages/Welcome'
import UserPage from '../pages/UserPage'

module.exports = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <Route path="/user" component={UserPage} />
      <IndexRoute component={Welcome} />
    </Route>
  </Router>
);
