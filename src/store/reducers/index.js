import { combineReducers } from 'redux'
import counter from './counter'
import gitHubUser from './gitHubUser'

export default combineReducers({
  counter,
  gitHubUser
})
