import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import '../public/assets/style.scss'
import '@babel/polyfill'

import App from './App'
import configureStore from './redux/store'

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'))
