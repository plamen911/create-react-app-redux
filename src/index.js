import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from './store/store'
import App from './App'

import 'sanitize.css/sanitize.css'
import './index.css'
import './bootstrap.min.css'

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <App/>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)
