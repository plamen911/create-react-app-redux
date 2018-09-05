import { combineReducers } from 'redux'
import counter from './counter'
import gitHubUser from './gitHubUser'
import auth from './auth'

export default combineReducers({
  counter,
  gitHubUser,
  auth
})
