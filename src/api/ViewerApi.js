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
}

export default ViewerApi
