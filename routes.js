// routes.js
import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Main from './components/Main';

export default (
  <Route path="/">
    <IndexRoute component={Main}/>
  </Route>
)
