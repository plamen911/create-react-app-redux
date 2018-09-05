// Reducers should run pure, sync code only! Reducers update the State.
import * as actionTypes from '../actions/actionTypes'

const initialState = {
  username: '',
  info: null,
  loading: false,
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GITHUB_USER_INFO:
      return {
        ...state,
        username: action.payload.username,
        info: action.payload.info,
        loading: false,
        error: null
      }
    case actionTypes.GITHUB_USER_LOADING:
      return {
        ...state,
        loading: true,
        error: null
      }
    case actionTypes.GITHUB_USER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      }
    default:
      return {
        ...state,
        loading: false
      }
  }
}
