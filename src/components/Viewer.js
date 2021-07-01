/**
 * @Author: Caven
 * @Date: 2021-07-01 20:10:00
 */

import React, { PureComponent } from 'react'

class Viewer extends PureComponent {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    DC.ready(() => {
      let viewer = new DC.Viewer('viewer-container')
      this.props.onViewerCreated(viewer)
    })
  }

  render() {
    return <div className="viewer-container" id="viewer-container" />
  }
}

export default Viewer
