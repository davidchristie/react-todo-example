import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import App from './App'
import createReduxStore from './createReduxStore'
import './index.css'
import registerServiceWorker from './registerServiceWorker'

const store = createReduxStore()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
