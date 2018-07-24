import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import counter from './counter'
import gitHubUser from './gitHubUser'

export default combineReducers({
  router: routerReducer,
  counter,
  gitHubUser
})
