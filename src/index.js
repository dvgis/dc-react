/**
 * @Author: Caven
 * @Date: 2021-07-01 12:03:42
 */

import React from 'react'
import ReactDOM from 'react-dom'
import RouteList from './router'
import { DcLoader, HttpLoader, UiLoader } from './loader'
import './themes/index.scss'
;(() => {
  new Promise((resolve) => {
    new DcLoader().load()
    new HttpLoader().load()
    new UiLoader().load()
    resolve()
  }).then(() => {
    const el_root = document.getElementById('root')
    ReactDOM.render(<RouteList />, el_root)
  })
})()
