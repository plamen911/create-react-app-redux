// Reducers should run pure, sync code only! Reducers update the State.
import * as actionTypes from '../actions/actionTypes'

const initialState = {
  isAuthed: false,
  email: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGGED_IN:
      return {
        ...state,
        isAuthed: action.payload.isAuthed,
        email: action.payload.email
      }
    default:
      return {
        ...state,
        loading: false
      }
  }
}
