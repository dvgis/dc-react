/**
 * @Author: Caven
 * @Date: 2021-07-01 20:10:00
 */

class ViewerApi {
  constructor(viewer) {
    this._viewer = viewer
  }

  get viewer() {
    return this._viewer
  }

  addBaseLayer() {
    let baidu = DC.ImageryLayerFactory.createAmapImageryLayer({
      style: 'img',
    })
    this._viewer.addBaseLayer(baidu)
    return this
  }
}

export default ViewerApi
