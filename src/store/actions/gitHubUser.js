// Action creators can run async code
import * as actionTypes from './actionTypes'
import { userInfoService } from '../../api/service'

export const getGitHubUserInfo = username => {
  return dispatch => {
    dispatch({
      type: actionTypes.GITHUB_USER_LOADING
    })

    return userInfoService(username)
      .then(res => {
        dispatch({
          type: actionTypes.GITHUB_USER_INFO,
          payload: {
            info: res.data,
            username
          }
        })
      })
      .catch(error => {
        dispatch({
          type: actionTypes.GITHUB_USER_ERROR,
          error
        })
      })
  }
}
