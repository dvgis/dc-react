/**
 * @Author: Caven
 * @Date: 2021-07-01 20:10:00
 */

import React from 'react'
import { HashRouter as Router, Route, useHistory } from 'react-router-dom'
import Home from '../views'

class RouteList extends React.PureComponent {
  render() {
    return (
      <Router history={useHistory}>
        <Route path="/" component={Home} />
      </Router>
    )
  }
}
export default RouteList
