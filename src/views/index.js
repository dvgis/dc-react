/**
 * @Author: Caven
 * @Date: 2021-07-01 20:10:00
 */

import React, { Component } from 'react'
import Viewer from '../components/Viewer'
import ViewerApi from '../api/ViewerApi'

class Home extends Component {
  _onViewerCreated(viewer) {
    global.viewerApi = new ViewerApi(viewer)
  }

  componentDidMount() {}

  render() {
    return (
      <div className="home">
        <Viewer onViewerCreated={this._onViewerCreated.bind(this)} />
      </div>
    )
  }
}

export default Home
