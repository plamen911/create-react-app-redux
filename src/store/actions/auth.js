// Action creators can run async code
import * as actionTypes from './actionTypes'

export const loggedIn = email => ({
  type: actionTypes.LOGGED_IN,
  payload: {
    isAuthed: true,
    email
  }
})

export const loggedOut = () => ({
  type: actionTypes.LOGGED_IN,
  payload: {
    isAuthed: false,
    email: ''
  }
})
